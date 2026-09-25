```javascript
/* =========================================================
   YOUR PC PARTS
   Main Application
========================================================= */


/* =========================================================
   1. COMBINE ALL PART DATABASES
========================================================= */

const allParts = [
    ...(typeof cpus !== "undefined" ? cpus : []),
    ...(typeof gpus !== "undefined" ? gpus : []),
    ...(typeof ram !== "undefined" ? ram : []),
    ...(typeof storage !== "undefined" ? storage : []),
    ...(typeof motherboards !== "undefined" ? motherboards : []),
    ...(typeof psus !== "undefined" ? psus : []),
    ...(typeof cases !== "undefined" ? cases : []),
    ...(typeof coolers !== "undefined" ? coolers : [])
];


/* =========================================================
   2. HELPER FUNCTIONS
========================================================= */

function normalize(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}


function money(value) {
    return `€${Number(value || 0).toFixed(0)}`;
}


function getPartByName(name) {
    return allParts.find(
        part => normalize(part.name) === normalize(name)
    );
}


/* =========================================================
   3. VALUE SCORE
========================================================= */

function valueScore(part) {
    if (!part || !part.price) {
        return 0;
    }

    return Number(part.performance || 0) / Number(part.price);
}


/* =========================================================
   4. COMPATIBILITY
========================================================= */


/*
   CPU -> Motherboard

   Modern CPUs use the socket field.

   Older Intel CPUs need extra chipset handling because
   some Intel generations shared the same physical socket.
*/

function cpuWorksWithMotherboard(cpu, motherboard) {

    if (!cpu || !motherboard) {
        return false;
    }


    // Socket mismatch
    if (
        cpu.socket &&
        motherboard.socket &&
        cpu.socket !== motherboard.socket
    ) {
        return false;
    }


    // If there is no socket information, don't reject it.
    if (!cpu.socket || !motherboard.socket) {
        return true;
    }


    /*
       Intel LGA1151:

       100/200 series = 6th/7th generation

       300 series = 8th/9th generation
    */

    if (cpu.socket === "LGA1151") {

        const chipset = String(motherboard.chipset || "")
            .toUpperCase();

        const cpuName = String(cpu.name || "").toLowerCase();

        const oldGeneration =
            cpuName.includes("6600") ||
            cpuName.includes("6700") ||
            cpuName.includes("7700");

        const newerGeneration =
            cpuName.includes("8400") ||
            cpuName.includes("8700") ||
            cpuName.includes("9600") ||
            cpuName.includes("9900");


        if (
            oldGeneration &&
            (
                chipset.includes("H310") ||
                chipset.includes("B360") ||
                chipset.includes("H370") ||
                chipset.includes("B365") ||
                chipset.includes("Z370") ||
                chipset.includes("Z390")
            )
        ) {
            return false;
        }


        if (
            newerGeneration &&
            (
                chipset.includes("H110") ||
                chipset.includes("B150") ||
                chipset.includes("H170") ||
                chipset.includes("Z170") ||
                chipset.includes("B250") ||
                chipset.includes("H270") ||
                chipset.includes("Z270")
            )
        ) {
            return false;
        }
    }


    return true;
}


/*
   RAM -> Motherboard
*/

function ramWorksWithMotherboard(ramPart, motherboard) {

    if (!ramPart || !motherboard) {
        return false;
    }


    if (
        ramPart.memoryType &&
        motherboard.memoryType &&
        ramPart.memoryType !== motherboard.memoryType
    ) {
        return false;
    }


    return true;
}


/*
   GPU -> PSU
*/

function gpuWorksWithPSU(gpu, psu) {

    if (!gpu || !psu) {
        return false;
    }


    const requiredPower =
        Number(gpu.power || 0) + 150;


    return Number(psu.wattage || 0) >= requiredPower;
}


/*
   Motherboard -> Case
*/

function motherboardWorksWithCase(motherboard, pcCase) {

    if (!motherboard || !pcCase) {
        return false;
    }


    if (
        pcCase.motherboardSupport &&
        motherboard.formFactor
    ) {

        const supported =
            pcCase.motherboardSupport
                .map(item => String(item).toLowerCase());

        if (
            !supported.includes(
                String(motherboard.formFactor).toLowerCase()
            )
        ) {
            return false;
        }
    }


    return true;
}


/*
   GPU -> Case
*/

function gpuWorksWithCase(gpu, pcCase) {

    if (!gpu || !pcCase) {
        return false;
    }


    if (
        gpu.length &&
        pcCase.maxGpuLength
    ) {

        if (
            Number(gpu.length) >
            Number(pcCase.maxGpuLength)
        ) {
            return false;
        }
    }


    return true;
}


/*
   CPU cooler -> CPU
*/

function coolerWorksWithCPU(cooler, cpu) {

    if (!cooler || !cpu) {
        return false;
    }


    /*
       If the CPU doesn't have socket information,
       allow the cooler.
    */

    if (!cpu.socket) {
        return true;
    }


    /*
       If the cooler doesn't have socket information,
       allow it rather than breaking the builder.
    */

    if (!cooler.socketSupport) {
        return true;
    }


    return cooler.socketSupport.some(
        socket =>
            String(socket).toLowerCase() ===
            String(cpu.socket).toLowerCase()
    );
}


/*
   CPU cooler -> Case

   Air coolers use height.
   AIO coolers use radiator size.
*/

function coolerWorksWithCase(cooler, pcCase) {

    if (!cooler || !pcCase) {
        return false;
    }


    // Air cooler height
    if (
        cooler.coolerType === "Air" &&
        cooler.height &&
        pcCase.maxCpuCoolerHeight
    ) {

        if (
            Number(cooler.height) >
            Number(pcCase.maxCpuCoolerHeight)
        ) {
            return false;
        }
    }


    // AIO radiator
    if (
        cooler.coolerType === "AIO" &&
        cooler.radiatorSize &&
        pcCase.radiatorSupport
    ) {

        const support =
            String(pcCase.radiatorSupport)
                .toLowerCase();

        if (
            !support.includes(
                String(cooler.radiatorSize)
            )
        ) {
            return false;
        }
    }


    return true;
}


/* =========================================================
   5. FIND COMPATIBLE PARTS
========================================================= */

function compatibleMotherboards(cpu) {

    return motherboards.filter(
        motherboard =>
            cpuWorksWithMotherboard(
                cpu,
                motherboard
            )
    );
}


function compatibleRAM(motherboard) {

    return ram.filter(
        ramPart =>
            ramWorksWithMotherboard(
                ramPart,
                motherboard
            )
    );
}


function compatiblePSUs(gpu) {

    const compatible =
        psus.filter(
            psu =>
                gpuWorksWithPSU(
                    gpu,
                    psu
                )
        );


    // If nothing matches, use the largest PSU available.
    if (compatible.length === 0) {

        return [...psus]
            .sort(
                (a, b) =>
                    Number(b.wattage || 0) -
                    Number(a.wattage || 0)
            );
    }


    return compatible;
}


function compatibleCases(motherboard, gpu) {

    return cases.filter(pcCase => {

        return (
            motherboardWorksWithCase(
                motherboard,
                pcCase
            ) &&
            gpuWorksWithCase(
                gpu,
                pcCase
            )
        );
    });
}


function compatibleCoolers(cpu, pcCase) {

    return coolers.filter(cooler => {

        return (
            coolerWorksWithCPU(
                cooler,
                cpu
            ) &&
            coolerWorksWithCase(
                cooler,
                pcCase
            )
        );
    });
}


/* =========================================================
   6. FIND CHEAPEST COMPATIBLE PART
========================================================= */

function cheapest(parts) {

    if (!parts || parts.length === 0) {
        return null;
    }


    return [...parts]
        .sort(
            (a, b) =>
                Number(a.price || 0) -
                Number(b.price || 0)
        )[0];
}


/* =========================================================
   7. FIND BEST VALUE PART
========================================================= */

function bestValue(parts) {

    if (!parts || parts.length === 0) {
        return null;
    }


    return [...parts]
        .sort(
            (a, b) =>
                valueScore(b) -
                valueScore(a)
        )[0];
}


/* =========================================================
   8. CHOOSE CPU
========================================================= */

function chooseCPU(budget) {

    const available =
        cpus.filter(
            cpu =>
                Number(cpu.price || 0) <=
                budget * 0.35
        );


    if (available.length === 0) {
        return cheapest(cpus);
    }


    return bestValue(available);
}


/* =========================================================
   9. CHOOSE GPU
========================================================= */

function chooseGPU(budget) {

    const gpuBudget =
        budget * 0.40;


    const available =
        gpus.filter(
            gpu =>
                Number(gpu.price || 0) <=
                gpuBudget
        );


    if (available.length === 0) {
        return cheapest(gpus);
    }


    return [...available]
        .sort(
            (a, b) =>
                Number(b.performance || 0) -
                Number(a.performance || 0)
        )[0];
}


/* =========================================================
   10. BUILD A PC
========================================================= */

function buildPC(budget) {

    if (!budget || budget <= 0) {
        return null;
    }


    let remaining = budget;


    /* CPU */

    const cpu =
        chooseCPU(budget);

    remaining -= cpu.price;


    /* GPU */

    const gpu =
        chooseGPU(remaining + gpu.price);

    remaining -= gpu.price;


    /* Motherboard */

    const motherboardOptions =
        compatibleMotherboards(cpu)
            .filter(
                motherboard =>
                    motherboard.price <=
                    remaining
            );


    const motherboard =
        bestValue(
            motherboardOptions
        ) ||
        cheapest(
            compatibleMotherboards(cpu)
        );

    remaining -= motherboard.price;


    /* RAM */

    const ramOptions =
        compatibleRAM(motherboard)
            .filter(
                ramPart =>
                    ramPart.price <=
                    remaining
            );


    const selectedRAM =
        bestValue(ramOptions) ||
        cheapest(
            compatibleRAM(motherboard)
        );

    remaining -= selectedRAM.price;


    /* Storage */

    const storageOptions =
        storage.filter(
            drive =>
                Number(drive.price || 0) <=
                remaining
        );


    const selectedStorage =
        bestValue(storageOptions) ||
        cheapest(storage);


    remaining -= selectedStorage.price;


    /* PSU */

    const psuOptions =
        compatiblePSUs(gpu)
            .filter(
                psu =>
                    Number(psu.price || 0) <=
                    remaining
            );


    const selectedPSU =
        cheapest(psuOptions) ||
        cheapest(
            compatiblePSUs(gpu)
        );

    remaining -= selectedPSU.price;


    /* CASE */

    const caseOptions =
        compatibleCases(
            motherboard,
            gpu
        ).filter(
            pcCase =>
                Number(pcCase.price || 0) <=
                remaining
        );


    const selectedCase =
        cheapest(caseOptions) ||
        cheapest(
            compatibleCases(
                motherboard,
                gpu
            )
        );

    remaining -= selectedCase.price;


    /* COOLER */

    const coolerOptions =
        compatibleCoolers(
            cpu,
            selectedCase
        ).filter(
            cooler =>
                Number(cooler.price || 0) <=
                remaining
        );


    const selectedCooler =
        cheapest(coolerOptions) ||
        cheapest(
            compatibleCoolers(
                cpu,
                selectedCase
            )
        );


    if (selectedCooler) {
        remaining -= selectedCooler.price;
    }


    return {

        cpu,

        gpu,

        motherboard,

        ram: selectedRAM,

        storage: selectedStorage,

        psu: selectedPSU,

        case: selectedCase,

        cooler: selectedCooler,

        remaining: Math.max(
            0,
            remaining
        )

    };
}


/* =========================================================
   11. DISPLAY PRODUCT CARD
========================================================= */

function createProductCard(part) {

    if (!part) {
        return "";
    }


    return `
        <article class="product-card">

            <div class="product-image">

                <img
                    src="${part.image || "https://placehold.co/500x500?text=PC+Part"}"
                    alt="${part.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-content">

                <p class="product-category">
                    ${part.category || "PC Part"}
                </p>

                <h3>
                    ${part.name}
                </h3>

                <p class="product-brand">
                    ${part.brand || "Generic"}
                </p>


                <div class="product-stats">

                    <span>
                        Performance:
                        ${part.performance || "N/A"}
                    </span>

                    <span>
                        ${part.year || ""}
                    </span>

                </div>


                <div class="product-bottom">

                    <strong>
                        ${money(part.price)}
                    </strong>

                    <a
                        href="${part.shop || "#"}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="product-link"
                    >
                        Find Price
                    </a>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   12. DISPLAY BUILD
========================================================= */

function displayBuild(build, budget) {

    const buildParts =
        document.getElementById(
            "buildParts"
        );

    const buildTotal =
        document.getElementById(
            "buildTotal"
        );

    const buildSummary =
        document.getElementById(
            "buildSummary"
        );


    if (!build) {

        buildParts.innerHTML = "";

        buildTotal.textContent =
            "€0";

        buildSummary.innerHTML = `
            <p>
                We couldn't create a build with
                the available parts.
            </p>
        `;

        return;
    }


    const parts = [

        build.cpu,
        build.gpu,
        build.motherboard,
        build.ram,
        build.storage,
        build.psu,
        build.case,
        build.cooler

    ].filter(Boolean);


    const total =
        parts.reduce(
            (sum, part) =>
                sum + Number(part.price || 0),
            0
        );


    buildParts.innerHTML =
        parts
            .map(createProductCard)
            .join("");


    buildTotal.textContent =
        money(total);


    buildSummary.innerHTML = `

        <div class="summary-item">
            <span>Budget</span>
            <strong>${money(budget)}</strong>
        </div>

        <div class="summary-item">
            <span>Build Cost</span>
            <strong>${money(total)}</strong>
        </div>

        <div class="summary-item">
            <span>Remaining</span>
            <strong>${money(Math.max(0, budget - total))}</strong>
        </div>

    `;
}


/* =========================================================
   13. BUILD BUTTON
========================================================= */

const buildButton =
    document.getElementById(
        "buildButton"
    );


if (buildButton) {

    buildButton.addEventListener(
        "click",
        () => {

            const budgetInput =
                document.getElementById(
                    "budget"
                );

            const message =
                document.getElementById(
                    "buildMessage"
                );


            const budget =
                Number(
                    budgetInput.value
                );


            if (!budget || budget <= 0) {

                message.textContent =
                    "Please enter a budget greater than €0.";

                return;
            }


            message.textContent =
                "Building your PC...";


            const build =
                buildPC(budget);


            if (!build) {

                message.textContent =
                    "Sorry, we couldn't create a build.";

                return;
            }


            message.textContent =
                "Your build is ready!";


            displayBuild(
                build,
                budget
            );


            document
                .getElementById("buildResults")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );
}


/* =========================================================
   14. PART SEARCH
========================================================= */

const searchInput =
    document.getElementById(
        "partSearch"
    );

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchResults =
    document.getElementById(
        "searchResults"
    );


let currentCategory = "all";


function searchParts() {

    if (!searchResults) {
        return;
    }


    const query =
        normalize(
            searchInput.value
        );


    let results =
        allParts;


    if (currentCategory !== "all") {

        results =
            results.filter(
                part =>
                    String(
                        part.category || ""
                    ).toLowerCase() ===
                    currentCategory.toLowerCase()
            );
    }


    if (query) {

        results =
            results.filter(part => {

                const searchable = normalize(`
                    ${part.name}
                    ${part.brand}
                    ${part.category}
                    ${part.socket || ""}
                    ${part.chipset || ""}
                    ${part.memoryType || ""}
                    ${part.storageType || ""}
                    ${part.interface || ""}
                    ${part.coolerType || ""}
                `);


                return searchable.includes(query);
            });
    }


    results =
        results.slice(0, 40);


    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="empty-state">
                <h3>No parts found</h3>
                <p>
                    Try another search.
                </p>
            </div>
        `;

        return;
    }


    searchResults.innerHTML =
        results
            .map(createProductCard)
            .join("");
}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchParts
    );
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchParts
    );
}


/* =========================================================
   15. CATEGORY FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category ||
                "all";


            searchParts();
        }
    );

});


/* =========================================================
   16. PART COMPARISON
========================================================= */

const compareButton =
    document.getElementById(
        "compareButton"
    );


function compareParts() {

    const firstInput =
        document.getElementById(
            "compareOne"
        );

    const secondInput =
        document.getElementById(
            "compareTwo"
        );

    const results =
        document.getElementById(
            "compareResults"
        );


    const first =
        findClosestPart(
            firstInput.value
        );

    const second =
        findClosestPart(
            secondInput.value
        );


    if (!first || !second) {

        results.innerHTML = `
            <div class="empty-state">
                <h3>Part not found</h3>
                <p>
                    Try entering the full product name.
                </p>
            </div>
        `;

        return;
    }


    results.innerHTML = `

        <div class="comparison-card">

            <div class="comparison-part">

                <img
                    src="${first.image || "https://placehold.co/500x500?text=Part"}"
                    alt="${first.name}"
                >

                <h3>
                    ${first.name}
                </h3>

                <p>
                    ${first.category}
                </p>

                <strong>
                    ${money(first.price)}
                </strong>

                <span>
                    Performance:
                    ${first.performance || "N/A"}
                </span>

            </div>


            <div class="comparison-divider">
                VS
            </div>


            <div class="comparison-part">

                <img
                    src="${second.image || "https://placehold.co/500x500?text=Part"}"
                    alt="${second.name}"
                >

                <h3>
                    ${second.name}
                </h3>

                <p>
                    ${second.category}
                </p>

                <strong>
                    ${money(second.price)}
                </strong>

                <span>
                    Performance:
                    ${second.performance || "N/A"}
                </span>

            </div>

        </div>
    `;
}


function findClosestPart(query) {

    const normalizedQuery =
        normalize(query);


    if (!normalizedQuery) {
        return null;
    }


    // Exact match
    const exact =
        allParts.find(
            part =>
                normalize(part.name) ===
                normalizedQuery
        );


    if (exact) {
        return exact;
    }


    // Partial match
    return allParts.find(
        part =>
            normalize(part.name)
                .includes(normalizedQuery) ||
            normalizedQuery.includes(
                normalize(part.name)
            )
    );
}


if (compareButton) {

    compareButton.addEventListener(
        "click",
        compareParts
    );
}


/* =========================================================
   17. INITIAL SEARCH
========================================================= */

searchParts();


/* =========================================================
   18. CONSOLE MESSAGE
========================================================= */

console.log(
    `Your PC Parts loaded ${allParts.length} parts.`
);
```
