
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// WORKOUT GENERATOR
// ========================================

const dayButtons = document.querySelectorAll(".day-option");
const daysInput = document.getElementById("days");

dayButtons.forEach((button) => {

    button.addEventListener("click", () => {

        dayButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        daysInput.value = button.dataset.days;

    });

});


// Workout templates.
// These are example templates, not universal prescriptions.

const workoutPlans = {

    2: [
        {
            title: "Day 1 — Full Body A",
            exercises: [
                "Squat",
                "Bench Press",
                "Lat Pulldown",
                "Romanian Deadlift",
                "Plank"
            ]
        },
        {
            title: "Day 2 — Full Body B",
            exercises: [
                "Leg Press",
                "Dumbbell Shoulder Press",
                "Seated Cable Row",
                "Dumbbell Curl",
                "Triceps Pushdown"
            ]
        }
    ],

    3: [
        {
            title: "Day 1 — Full Body A",
            exercises: [
                "Squat",
                "Bench Press",
                "Lat Pulldown",
                "Plank"
            ]
        },
        {
            title: "Day 2 — Full Body B",
            exercises: [
                "Romanian Deadlift",
                "Dumbbell Shoulder Press",
                "Seated Cable Row",
                "Dumbbell Curl"
            ]
        },
        {
            title: "Day 3 — Full Body C",
            exercises: [
                "Leg Press",
                "Incline Dumbbell Press",
                "Chest-Supported Row",
                "Lateral Raise",
                "Triceps Pushdown"
            ]
        }
    ],

    4: [
        {
            title: "Day 1 — Upper Body",
            exercises: [
                "Bench Press",
                "Lat Pulldown",
                "Dumbbell Shoulder Press",
                "Seated Cable Row",
                "Dumbbell Curl"
            ]
        },
        {
            title: "Day 2 — Lower Body",
            exercises: [
                "Squat",
                "Romanian Deadlift",
                "Leg Press",
                "Leg Curl",
                "Calf Raise"
            ]
        },
        {
            title: "Day 3 — Upper Body",
            exercises: [
                "Incline Dumbbell Press",
                "Chest-Supported Row",
                "Lateral Raise",
                "Lat Pulldown",
                "Triceps Pushdown"
            ]
        },
        {
            title: "Day 4 — Lower Body",
            exercises: [
                "Leg Press",
                "Hip Thrust",
                "Leg Extension",
                "Leg Curl",
                "Calf Raise"
            ]
        }
    ],

    5: [
        {
            title: "Day 1 — Chest & Triceps",
            exercises: [
                "Bench Press",
                "Incline Dumbbell Press",
                "Cable Fly",
                "Triceps Pushdown"
            ]
        },
        {
            title: "Day 2 — Back & Biceps",
            exercises: [
                "Lat Pulldown",
                "Seated Cable Row",
                "Face Pull",
                "Dumbbell Curl"
            ]
        },
        {
            title: "Day 3 — Legs",
            exercises: [
                "Squat",
                "Romanian Deadlift",
                "Leg Press",
                "Leg Curl"
            ]
        },
        {
            title: "Day 4 — Shoulders & Arms",
            exercises: [
                "Shoulder Press",
                "Lateral Raise",
                "Dumbbell Curl",
                "Triceps Pushdown"
            ]
        },
        {
            title: "Day 5 — Upper Body",
            exercises: [
                "Incline Dumbbell Press",
                "Chest-Supported Row",
                "Lat Pulldown",
                "Lateral Raise"
            ]
        }
    ],

    6: [
        {
            title: "Day 1 — Push A",
            exercises: [
                "Bench Press",
                "Shoulder Press",
                "Lateral Raise",
                "Triceps Pushdown"
            ]
        },
        {
            title: "Day 2 — Pull A",
            exercises: [
                "Lat Pulldown",
                "Seated Cable Row",
                "Face Pull",
                "Dumbbell Curl"
            ]
        },
        {
            title: "Day 3 — Legs A",
            exercises: [
                "Squat",
                "Romanian Deadlift",
                "Leg Press",
                "Calf Raise"
            ]
        },
        {
            title: "Day 4 — Push B",
            exercises: [
                "Incline Dumbbell Press",
                "Chest Press",
                "Lateral Raise",
                "Overhead Triceps Extension"
            ]
        },
        {
            title: "Day 5 — Pull B",
            exercises: [
                "Chest-Supported Row",
                "Lat Pulldown",
                "Rear Delt Fly",
                "Hammer Curl"
            ]
        },
        {
            title: "Day 6 — Legs B",
            exercises: [
                "Leg Press",
                "Hip Thrust",
                "Leg Curl",
                "Calf Raise"
            ]
        }
    ]

};


// Exercise sets and repetitions.

function getPrescription(goal, experience) {

    if (goal === "strength") {

        return experience === "beginner"
            ? "2–3 sets × 5–8 reps"
            : "3–4 sets × 3–6 reps";

    }

    if (goal === "fat") {

        return "2–3 sets × 8–15 reps";

    }

    if (goal === "fitness") {

        return "2–3 sets × 8–12 reps";

    }

    return experience === "beginner"
        ? "2–3 sets × 8–12 reps"
        : "3 sets × 8–12 reps";

}


function getGoalName(goal) {

    const names = {
        muscle: "Muscle Gain",
        strength: "Strength",
        fat: "Fat Loss",
        fitness: "General Fitness"
    };

    return names[goal] || "General Fitness";

}


function getExerciseNames(plan, equipment) {

    if (equipment === "gym") {
        return plan.exercises;
    }

    const substitutions = {

        "Bench Press": {
            dumbbells: "Dumbbell Bench Press",
            bodyweight: "Push-Ups"
        },

        "Incline Dumbbell Press": {
            dumbbells: "Incline Dumbbell Press",
            bodyweight: "Incline Push-Ups"
        },

        "Chest Press": {
            dumbbells: "Dumbbell Floor Press",
            bodyweight: "Push-Ups"
        },

        "Cable Fly": {
            dumbbells: "Dumbbell Fly",
            bodyweight: "Push-Ups"
        },

        "Lat Pulldown": {
            dumbbells: "Dumbbell Pullover",
            bodyweight: "Assisted Pull-Ups"
        },

        "Seated Cable Row": {
            dumbbells: "Dumbbell Row",
            bodyweight: "Inverted Row"
        },

        "Chest-Supported Row": {
            dumbbells: "Dumbbell Row",
            bodyweight: "Inverted Row"
        },

        "Face Pull": {
            dumbbells: "Rear Delt Raise",
            bodyweight: "Prone Y Raise"
        },

        "Squat": {
            dumbbells: "Goblet Squat",
            bodyweight: "Bodyweight Squat"
        },

        "Leg Press": {
            dumbbells: "Goblet Squat",
            bodyweight: "Bodyweight Squat"
        },

        "Leg Extension": {
            dumbbells: "Goblet Squat",
            bodyweight: "Bodyweight Squat"
        },

        "Romanian Deadlift": {
            dumbbells: "Dumbbell Romanian Deadlift",
            bodyweight: "Glute Bridge"
        },

        "Leg Curl": {
            dumbbells: "Dumbbell Glute Bridge",
            bodyweight: "Glute Bridge"
        },

        "Hip Thrust": {
            dumbbells: "Dumbbell Hip Thrust",
            bodyweight: "Glute Bridge"
        },

        "Calf Raise": {
            dumbbells: "Dumbbell Calf Raise",
            bodyweight: "Bodyweight Calf Raise"
        },

        "Shoulder Press": {
            dumbbells: "Dumbbell Shoulder Press",
            bodyweight: "Pike Push-Ups"
        },

        "Dumbbell Shoulder Press": {
            dumbbells: "Dumbbell Shoulder Press",
            bodyweight: "Pike Push-Ups"
        },

        "Lateral Raise": {
            dumbbells: "Dumbbell Lateral Raise",
            bodyweight: "Arm Circles"
        },

        "Dumbbell Curl": {
            dumbbells: "Dumbbell Curl",
            bodyweight: "Self-Resisted Curl"
        },

        "Hammer Curl": {
            dumbbells: "Hammer Curl",
            bodyweight: "Self-Resisted Curl"
        },

        "Triceps Pushdown": {
            dumbbells: "Dumbbell Triceps Extension",
            bodyweight: "Close-Grip Push-Ups"
        },

        "Overhead Triceps Extension": {
            dumbbells: "Dumbbell Triceps Extension",
            bodyweight: "Close-Grip Push-Ups"
        },

        "Plank": {
            dumbbells: "Plank",
            bodyweight: "Plank"
        }

    };

    return plan.exercises.map((exercise) => {

        if (equipment === "bodyweight") {

            if (
                exercise === "Assisted Pull-Ups" ||
                exercise === "Inverted Row"
            ) {
                return "Pulling Exercise (requires suitable bar/setup)";
            }

        }

        return substitutions[exercise]?.[equipment] || exercise;

    });

}


function generateWorkout() {

    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const days = Number(daysInput.value);
    const duration = Number(document.getElementById("duration").value);
    const equipment = document.getElementById("equipment").value;

    const plans = workoutPlans[days];

    const prescription = getPrescription(goal, experience);

    const result = document.getElementById("workoutResult");

    let html = `
        <div class="generated-workout">

            <span class="small-label">YOUR PERSONALIZED STARTING PLAN</span>

            <h3>${days} DAYS. ONE MISSION.</h3>

            <p>
                Goal: ${getGoalName(goal)} ·
                Experience: ${experience} ·
                ${duration} minutes per session
            </p>
    `;

    plans.forEach((plan) => {

        const exercises = getExerciseNames(plan, equipment);

        html += `
            <div class="plan-day">

                <h4>
                    <span>${plan.title}</span>
                </h4>

                <p>
                    ${exercises.map((exercise) =>
                        `• ${exercise}`
                    ).join("<br>")}
                </p>

                <small>
                    Suggested starting prescription: ${prescription}
                </small>

            </div>
        `;

    });

    html += `
            <p class="plan-disclaimer">
                Warm up before training, use controlled technique,
                and adjust loads to your ability. Rest days are important.
                For strength work, rest longer between demanding sets.
                Bodyweight and dumbbell substitutions may not target
                muscles identically to the original exercises.
            </p>

        </div>
    `;

    result.innerHTML = html;

    document.querySelector(".preview-status").textContent =
        "PLAN GENERATED";

}


document.getElementById("workoutForm").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();
        generateWorkout();

    }
);


// ========================================
// DIET CALCULATOR
// ========================================

document.getElementById("dietForm").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const age = Number(document.getElementById("age").value);
        const sex = document.getElementById("sex").value;
        const weight = Number(document.getElementById("weight").value);
        const height = Number(document.getElementById("height").value);

        const goal = document.getElementById("dietGoal").value;
        const activity = Number(document.getElementById("activity").value);

        const preference =
            document.getElementById("foodPreference").value;

        if (
            age < 18 || age > 100 ||
            weight < 30 || weight > 300 ||
            height < 100 || height > 250
        ) {

            alert("Please enter valid age, height and weight.");
            return;

        }


        // Mifflin-St Jeor equation.
        // Estimates are approximate, not a medical assessment.

        let bmr;

        if (sex === "male") {

            bmr =
                10 * weight +
                6.25 * height -
                5 * age +
                5;

        } else {

            bmr =
                10 * weight +
                6.25 * height -
                5 * age -
                161;

        }


        const maintenance = bmr * activity;

        let targetCalories;

        if (goal === "muscle") {

            targetCalories = maintenance * 1.1;

        } else if (goal === "fat") {

            targetCalories = maintenance * 0.9;

        } else {

            targetCalories = maintenance;

        }

        targetCalories = Math.round(targetCalories / 50) * 50;


        // Simple illustrative meal suggestions.
        // Quantities and calories need individual adjustment.

        const meals = {

            veg: [
                {
                    name: "BREAKFAST",
                    food: "Oats with milk, banana, and a few nuts."
                },
                {
                    name: "LUNCH",
                    food: "Roti, dal, sabzi, curd, and salad."
                },
                {
                    name: "SNACK",
                    food: "Sattu drink or fruit with roasted chana."
                },
                {
                    name: "DINNER",
                    food: "Paneer or soy chunks with roti and vegetables."
                }
            ],

            egg: [
                {
                    name: "BREAKFAST",
                    food: "Oats, milk, banana, and boiled eggs."
                },
                {
                    name: "LUNCH",
                    food: "Roti, dal, sabzi, curd, and salad."
                },
                {
                    name: "SNACK",
                    food: "Sattu drink or fruit with roasted chana."
                },
                {
                    name: "DINNER",
                    food: "Egg bhurji, roti, and vegetables."
                }
            ],

            nonveg: [
                {
                    name: "BREAKFAST",
                    food: "Oats, milk, banana, and eggs."
                },
                {
                    name: "LUNCH",
                    food: "Roti or rice, dal, chicken, and vegetables."
                },
                {
                    name: "SNACK",
                    food: "Sattu drink or fruit with roasted chana."
                },
                {
                    name: "DINNER",
                    food: "Chicken or eggs with roti and vegetables."
                }
            ]

        };


        const selectedMeals = meals[preference];

        const result = document.getElementById("dietResult");

        let html = `
            <span class="small-label">YOUR DAILY FUEL GUIDE</span>

            <div class="calorie-box">
                <span>ESTIMATED DAILY CALORIES</span>

                <h3>
                    ${targetCalories.toLocaleString("en-IN")}
                    <small>kcal/day</small>
                </h3>
            </div>

            <p class="plan-disclaimer">
                Estimated maintenance: ${Math.round(maintenance)}
                kcal/day. Actual needs may differ substantially.
            </p>

            <h4>YOUR SAMPLE MEAL STRUCTURE</h4>
        `;


        selectedMeals.forEach((meal) => {

            html += `
                <div class="meal-item">

                    <div>
                        <strong>${meal.name}</strong>
                        <p>${meal.food}</p>
                    </div>

                </div>
            `;

        });


        html += `
            <p class="plan-disclaimer">
                These are sample meal ideas, not a precisely portioned
                calorie or protein prescription. Adjust portions to your
                needs and monitor your progress. Seek a qualified dietitian
                for medical conditions, special dietary needs, or an
                individualized nutrition plan.
            </p>
        `;

        result.innerHTML = html;

    }
);


// ========================================
// EXERCISE TECHNIQUE LIBRARY
// ========================================

const exerciseGuides = {

    bench: {
        title: "Bench Press",

        muscles: "Primary: Chest. Secondary: Triceps and front deltoids.",

        steps: [
            "Lie on the bench with your eyes approximately beneath the bar.",
            "Keep your feet planted and shoulder blades stable against the bench.",
            "Grip the bar evenly. Unrack it with control.",
            "Lower the bar toward the mid-to-lower chest while keeping your wrists stacked over your forearms.",
            "Press upward smoothly without bouncing the bar or forcing your joints into an uncomfortable position."
        ],

        mistakes: [
            "Bouncing the bar off the chest.",
            "Lifting the hips off the bench.",
            "Using a load that prevents controlled repetitions.",
            "Attempting heavy sets without an appropriate spotter or safety setup."
        ],

        tip: "Start light and learn the movement. For challenging barbell sets, use a competent spotter or correctly positioned safety arms."
    },

    lat: {
        title: "Lat Pulldown",

        muscles: "Primary: Latissimus dorsi. Secondary: Biceps, upper back, and other elbow-flexor muscles.",

        steps: [
            "Adjust the thigh pad so your legs are held securely.",
            "Take a comfortable grip on the bar and sit upright.",
            "Keep your torso stable and pull the bar toward your upper chest.",
            "Move your elbows down toward your sides without excessive swinging.",
            "Allow the bar to return slowly while maintaining control."
        ],

        mistakes: [
            "Swinging the torso to move the weight.",
            "Pulling the bar behind the neck.",
            "Using momentum instead of controlled repetitions.",
            "Shrugging excessively throughout the movement."
        ],

        tip: "Use a load that allows smooth movement and a comfortable range of motion."
    },

    squat: {
        title: "Barbell Squat",

        muscles: "Primary: Quadriceps and gluteal muscles. Secondary: Adductors, spinal erectors, and trunk muscles.",

        steps: [
            "Position the bar securely on your upper back using a rack with safety arms.",
            "Stand with a stable stance and brace your trunk.",
            "Bend your hips and knees together, keeping your feet planted.",
            "Descend only as far as you can maintain control and a comfortable position.",
            "Drive through your feet to stand up without losing balance or trunk control."
        ],

        mistakes: [
            "Using more weight than you can control.",
            "Allowing your feet to shift or heels to lift unexpectedly.",
            "Rushing the descent or bouncing out of the bottom.",
            "Ignoring pain or repeatedly losing balance."
        ],

        tip: "Practice with bodyweight or a light load first. Rack setup, mobility, and appropriate depth vary by person."
    }

};


const exerciseModal = document.getElementById("exerciseModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let lastFocusedElement = null;


document.querySelectorAll(".exercise-details").forEach((button) => {

    button.addEventListener("click", () => {

        const key = button.dataset.exercise;
        const guide = exerciseGuides[key];

        if (!guide) {
            return;
        }

        lastFocusedElement = button;

        modalTitle.textContent = guide.title;

        modalBody.innerHTML = `
            <h3>MUSCLES TARGETED</h3>
            <p>${guide.muscles}</p>

            <h3>HOW TO PERFORM</h3>

            <ol>
                ${guide.steps.map((step) =>
                    `<li>${step}</li>`
                ).join("")}
            </ol>

            <h3>COMMON MISTAKES</h3>

            <ul>
                ${guide.mistakes.map((mistake) =>
                    `<li>${mistake}</li>`
                ).join("")}
            </ul>

            <h3>TRAIN SMART</h3>
            <p>${guide.tip}</p>
        `;

        exerciseModal.hidden = false;
        closeModal.focus();

    });

});


function hideExerciseModal() {

    exerciseModal.hidden = true;

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}


closeModal.addEventListener("click", hideExerciseModal);

exerciseModal.addEventListener("click", (event) => {

    if (event.target === exerciseModal) {
        hideExerciseModal();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && !exerciseModal.hidden) {
        hideExerciseModal();
    }

});


// ========================================
// PROGRESS TRACKER — LOCAL STORAGE
// ========================================

function readProgress() {

    try {

        const saved = JSON.parse(
            localStorage.getItem("fitgenProgress")
        );

        if (!saved || typeof saved !== "object") {
            return {
                workouts: 0,
                weight: null
            };
        }

        return {
            workouts: Number.isInteger(saved.workouts) &&
                saved.workouts >= 0
                    ? saved.workouts
                    : 0,

            weight: Number.isFinite(saved.weight) &&
                saved.weight >= 30 &&
                saved.weight <= 300
                    ? saved.weight
                    : null
        };

    } catch (error) {

        return {
            workouts: 0,
            weight: null
        };

    }

}


let progress = readProgress();


function saveProgress() {

    try {

        localStorage.setItem(
            "fitgenProgress",
            JSON.stringify(progress)
        );

    } catch (error) {

        alert(
            "Progress could not be saved in this browser. " +
            "Your browser may have storage disabled."
        );

    }

}


function renderProgress() {

    document.getElementById("workoutCount").textContent =
        progress.workouts;

    const weightStatus = document.getElementById("weightStatus");
    const weightInput = document.getElementById("progressWeight");

    if (progress.weight !== null) {

        weightInput.value = progress.weight;

        weightStatus.textContent =
            `LAST RECORDED: ${progress.weight} KG`;

    } else {

        weightInput.value = "";
        weightStatus.textContent = "ADD YOUR WEIGHT";

    }

}


document.getElementById("logWorkout").addEventListener(
    "click",
    () => {

        progress.workouts += 1;

        saveProgress();
        renderProgress();

    }
);


document.getElementById("saveWeight").addEventListener(
    "click",
    () => {

        const input = document.getElementById("progressWeight");
        const weight = Number(input.value);

        if (!Number.isFinite(weight) || weight < 30 || weight > 300) {

            alert("Please enter a valid bodyweight between 30 and 300 kg.");
            return;

        }

        progress.weight = Math.round(weight * 10) / 10;

        saveProgress();
        renderProgress();

    }
);


renderProgress();