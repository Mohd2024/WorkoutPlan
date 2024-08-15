document.addEventListener('DOMContentLoaded', () => {
    const workoutPlans = {
        'full-body': `
            <h3>Full-Body Workout Split</h3>
            <p>Frequency: 3 times per week</p>
            <h4>Day 1:</h4>
            <ul>
                <li>Squat: 4 sets of 8-10 reps</li>
                <li>Bench Press: 4 sets of 8-10 reps</li>
                <li>Bent-Over Row: 4 sets of 8-10 reps</li>
                <li>Overhead Press: 3 sets of 10-12 reps</li>
                <li>Deadlift: 3 sets of 5 reps</li>
                <li>Plank: 3 sets of 60 seconds</li>
            </ul>
            <h4>Day 2:</h4>
            <ul>
                <li>Leg Press: 4 sets of 10-12 reps</li>
                <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
                <li>Lat Pulldown: 4 sets of 10-12 reps</li>
                <li>Dumbbell Shoulder Press: 3 sets of 10-12 reps</li>
                <li>Romanian Deadlift: 3 sets of 8-10 reps</li>
                <li>Hanging Leg Raise: 3 sets of 15 reps</li>
            </ul>
            <h4>Day 3:</h4>
            <ul>
                <li>Lunge: 4 sets of 10-12 reps</li>
                <li>Push-Up: 4 sets of 15 reps</li>
                <li>T-Bar Row: 4 sets of 8-10 reps</li>
                <li>Dumbbell Lateral Raise: 3 sets of 12-15 reps</li>
                <li>Kettlebell Swing: 3 sets of 15 reps</li>
                <li>Russian Twist: 3 sets of 20 reps</li>
            </ul>
        `,
        'upper-lower': `
            <h3>Upper/Lower Split</h3>
            <p>Frequency: 4 times per week</p>
            <h4>Day 1: Upper Body</h4>
            <ul>
                <li>Bench Press: 4 sets of 6-8 reps</li>
                <li>Bent-Over Row: 4 sets of 6-8 reps</li>
                <li>Overhead Press: 3 sets of 8-10 reps</li>
                <li>Pull-Up: 3 sets of 8-10 reps</li>
                <li>Dumbbell Curl: 3 sets of 10-12 reps</li>
                <li>Tricep Dips: 3 sets of 10-12 reps</li>
            </ul>
            <h4>Day 2: Lower Body</h4>
            <ul>
                <li>Squat: 4 sets of 6-8 reps</li>
                <li>Deadlift: 3 sets of 5 reps</li>
                <li>Leg Press: 3 sets of 10-12 reps</li>
                <li>Hamstring Curl: 3 sets of 10-12 reps</li>
                <li>Calf Raise: 4 sets of 12-15 reps</li>
                <li>Hanging Leg Raise: 3 sets of 15 reps</li>
            </ul>
            <h4>Day 3: Upper Body</h4>
            <ul>
                <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
                <li>Lat Pulldown: 4 sets of 8-10 reps</li>
                <li>Dumbbell Shoulder Press: 3 sets of 10-12 reps</li>
                <li>Seated Row: 3 sets of 10-12 reps</li>
                <li>Dumbbell Curl: 3 sets of 12 reps</li>
                <li>Tricep Pushdown: 3 sets of 12 reps</li>
            </ul>
            <h4>Day 4: Lower Body</h4>
            <ul>
                <li>Front Squat: 4 sets of 6-8 reps</li>
                <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
                <li>Lunge: 3 sets of 10-12 reps</li>
                <li>Leg Extension: 3 sets of 12 reps</li>
                <li>Standing Calf Raise: 4 sets of 15 reps</li>
                <li>Plank: 3 sets of 60 seconds</li>
            </ul>
        `,
        // Add content for other workout types here
        'ppl':`<h3>Push/Pull/Legs (PPL) Split</h3>
<p>Frequency: 6 times per week</p>
<h4>Day 1: Push (Chest, Shoulders, Triceps)</h4>
<ul>
    <li>Bench Press: 4 sets of 6-8 reps</li>
    <li>Overhead Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Flyes: 3 sets of 10-12 reps</li>
    <li>Lateral Raise: 3 sets of 12 reps</li>
    <li>Tricep Dips: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 2: Pull (Back, Biceps)</h4>
<ul>
    <li>Deadlift: 4 sets of 5 reps</li>
    <li>Bent-Over Row: 4 sets of 8-10 reps</li>
    <li>Pull-Up: 4 sets of 8-10 reps</li>
    <li>Face Pull: 3 sets of 12 reps</li>
    <li>Dumbbell Curl: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 3: Legs</h4>
<ul>
    <li>Squat: 4 sets of 6-8 reps</li>
    <li>Leg Press: 4 sets of 10-12 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
    <li>Calf Raise: 4 sets of 12-15 reps</li>
    <li>Leg Curl: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 4: Push (Repeat)</h4>
<ul>
    <li>Incline Bench Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Shoulder Press: 4 sets of 10 reps</li>
    <li>Chest Dips: 3 sets of 12 reps</li>
    <li>Dumbbell Front Raise: 3 sets of 12 reps</li>
    <li>Tricep Pushdown: 3 sets of 12 reps</li>
</ul>
<h4>Day 5: Pull (Repeat)</h4>
<ul>
    <li>T-Bar Row: 4 sets of 8-10 reps</li>
    <li>Lat Pulldown: 4 sets of 10-12 reps</li>
    <li>Seated Row: 3 sets of 10-12 reps</li>
    <li>Shrugs: 3 sets of 12 reps</li>
    <li>Hammer Curl: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 6: Legs (Repeat)</h4>
<ul>
    <li>Front Squat: 4 sets of 6-8 reps</li>
    <li>Lunge: 4 sets of 10-12 reps</li>
    <li>Leg Extension: 4 sets of 12 reps</li>
    <li>Calf Raise: 4 sets of 15 reps</li>
    <li>Plank: 3 sets of 60 seconds</li>
</ul>`,
        'bro':`<h3>Bro Split (Body Part Split)</h3>
<p>Frequency: 5 times per week</p>
<h4>Day 1: Chest</h4>
<ul>
    <li>Bench Press: 4 sets of 6-8 reps</li>
    <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Flyes: 3 sets of 10-12 reps</li>
    <li>Chest Dips: 3 sets of 10-12 reps</li>
    <li>Push-Up: 3 sets of 15 reps</li>
</ul>
<h4>Day 2: Back</h4>
<ul>
    <li>Deadlift: 4 sets of 5 reps</li>
    <li>Pull-Up: 4 sets of 8-10 reps</li>
    <li>Bent-Over Row: 4 sets of 8-10 reps</li>
    <li>Seated Row: 3 sets of 10-12 reps</li>
    <li>Face Pull: 3 sets of 12 reps</li>
</ul>
<h4>Day 3: Shoulders</h4>
<ul>
    <li>Overhead Press: 4 sets of 6-8 reps</li>
    <li>Dumbbell Shoulder Press: 4 sets of 8-10 reps</li>
    <li>Lateral Raise: 3 sets of 12 reps</li>
    <li>Front Raise: 3 sets of 12 reps</li>
    <li>Shrugs: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 4: Legs</h4>
<ul>
    <li>Squat: 4 sets of 6-8 reps</li>
    <li>Leg Press: 4 sets of 10-12 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
    <li>Lunge: 3 sets of 10-12 reps</li>
    <li>Calf Raise: 4 sets of 12-15 reps</li>
</ul>
<h4>Day 5: Arms</h4>
<ul>
    <li>Barbell Curl: 4 sets of 8-10 reps</li>
    <li>Tricep Pushdown: 4 sets of 10-12 reps</li>
    <li>Dumbbell Curl: 3 sets of 10-12 reps</li>
    <li>Skull Crushers: 3 sets of 10-12 reps</li>
    <li>Hammer Curl: 3 sets of 12 reps</li>
    <li>Tricep Dips: 3 sets of 12 reps</li>
</ul>
`,
'phul':`<h3>PHUL (Power Hypertrophy Upper Lower) Split</h3>
<p>Frequency: 4 times per week</p>
<h4>Day 1: Power Upper</h4>
<ul>
    <li>Bench Press: 4 sets of 3-5 reps</li>
    <li>Bent-Over Row: 4 sets of 3-5 reps</li>
    <li>Overhead Press: 3 sets of 5-8 reps</li>
    <li>Pull-Up: 3 sets of 5-8 reps</li>
</ul>
<h4>Day 2: Power Lower</h4>
<ul>
    <li>Squat: 4 sets of 3-5 reps</li>
    <li>Deadlift: 3 sets of 3-5 reps</li>
    <li>Leg Press: 3 sets of 8-10 reps</li>
    <li>Standing Calf Raise: 4 sets of 8-10 reps</li>
</ul>
<h4>Day 3: Hypertrophy Upper</h4>
<ul>
    <li>Incline Dumbbell Press: 4 sets of 8-12 reps</li>
    <li>Lat Pulldown: 4 sets of 8-12 reps</li>
    <li>Dumbbell Flyes: 3 sets of 10-15 reps</li>
    <li>Seated Row: 3 sets of 10-15 reps</li>
    <li>Dumbbell Curl: 3 sets of 12-15 reps</li>
    <li>Tricep Pushdown: 3 sets of 12-15 reps</li>
</ul>
<h4>Day 4: Hypertrophy Lower</h4>
<ul>
    <li>Front Squat: 4 sets of 8-12 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-12 reps</li>
    <li>Lunge: 3 sets of 12-15 reps</li>
    <li>Leg Extension: 3 sets of 12-15 reps</li>
    <li>Seated Calf Raise: 4 sets of 12-15 reps</li>
</ul>
`,
'phat':`<p>Frequency: 4 times per week</p>
<h4>Day 1: Power Upper</h4>
<ul>
    <li>Bench Press: 4 sets of 3-5 reps</li>
    <li>Bent-Over Row: 4 sets of 3-5 reps</li>
    <li>Overhead Press: 3 sets of 5-8 reps</li>
    <li>Pull-Up: 3 sets of 5-8 reps</li>
</ul>
<h4>Day 2: Power Lower</h4>
<ul>
    <li>Squat: 4 sets of 3-5 reps</li>
    <li>Deadlift: 3 sets of 3-5 reps</li>
    <li>Leg Press: 3 sets of 8-10 reps</li>
    <li>Calf Raise: 4 sets of 6-8 reps</li>
</ul>
<h4>Day 3: Hypertrophy Upper</h4>
<ul>
    <li>Incline Dumbbell Press: 4 sets of 8-12 reps</li>
    <li>T-Bar Row: 4 sets of 8-12 reps</li>
    <li>Dumbbell Shoulder Press: 3 sets of 10-12 reps</li>
    <li>Lat Pulldown: 3 sets of 10-12 reps</li>
    <li>Dumbbell Curl: 3 sets of 12 reps</li>
    <li>Tricep Pushdown: 3 sets of 12 reps</li>
</ul>
<h4>Day 4: Hypertrophy Lower</h4>
<ul>
    <li>Front Squat: 4 sets of 8-12 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-12 reps</li>
    <li>Leg Curl: 3 sets of 10-12 reps</li>
    <li>Calf Raise: 4 sets of 12-15 reps</li>
    <li>Lunge: 3 sets of 10-12 reps</li>
</ul>`,
'arnold':`<p>Frequency: 6 times per week</p>
<h4>Day 1: Chest/Back</h4>
<ul>
    <li>Bench Press: 4 sets of 6-8 reps</li>
    <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
    <li>Pull-Up: 4 sets of 8-10 reps</li>
    <li>Bent-Over Row: 4 sets of 8-10 reps</li>
    <li>Chest Flyes: 3 sets of 10-12 reps</li>
    <li>Face Pull: 3 sets of 12 reps</li>
</ul>
<h4>Day 2: Shoulders/Arms</h4>
<ul>
    <li>Overhead Press: 4 sets of 6-8 reps</li>
    <li>Dumbbell Shoulder Press: 4 sets of 8-10 reps</li>
    <li>Barbell Curl: 3 sets of 10-12 reps</li>
    <li>Skull Crushers: 3 sets of 10-12 reps</li>
    <li>Dumbbell Curl: 3 sets of 12 reps</li>
    <li>Tricep Pushdown: 3 sets of 12 reps</li>
</ul>
<h4>Day 3: Legs</h4>
<ul>
    <li>Squat: 4 sets of 6-8 reps</li>
    <li>Leg Press: 4 sets of 10-12 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
    <li>Lunge: 3 sets of 10-12 reps</li>
    <li>Calf Raise: 4 sets of 12-15 reps</li>
</ul>
<h4>Day 4: Chest/Back</h4>
<ul>
    <li>Incline Bench Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Flyes: 4 sets of 8-10 reps</li>
    <li>T-Bar Row: 4 sets of 8-10 reps</li>
    <li>Lat Pulldown: 4 sets of 8-10 reps</li>
    <li>Chest Dips: 3 sets of 12 reps</li>
    <li>Shrugs: 3 sets of 12 reps</li>
</ul>
<h4>Day 5: Shoulders/Arms</h4>
<ul>
    <li>Dumbbell Shoulder Press: 4 sets of 8-10 reps</li>
    <li>Lateral Raise: 4 sets of 10-12 reps</li>
    <li>Barbell Curl: 3 sets of 10-12 reps</li>
    <li>Tricep Dips: 3 sets of 10-12 reps</li>
    <li>Hammer Curl: 3 sets of 12 reps</li>
    <li>Tricep Kickbacks: 3 sets of 12 reps</li>
</ul>
<h4>Day 6: Legs</h4>
<ul>
    <li>Front Squat: 4 sets of 6-8 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
    <li>Leg Curl: 3 sets of 10-12 reps</li>
    <li>Standing Calf Raise: 4 sets of 12-15 reps</li>
    <li>Plank: 3 sets of 60 seconds</li>
</ul>`,
'push-pull':`<p>Frequency: 4 times per week</p>
<h4>Day 1: Push (Chest, Shoulders, Triceps)</h4>
<ul>
    <li>Bench Press: 4 sets of 6-8 reps</li>
    <li>Overhead Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Flyes: 3 sets of 10-12 reps</li>
    <li>Tricep Dips: 3 sets of 10-12 reps</li>
    <li>Lateral Raise: 3 sets of 12 reps</li>
</ul>
<h4>Day 2: Pull (Back, Biceps)</h4>
<ul>
    <li>Deadlift: 4 sets of 5 reps</li>
    <li>Bent-Over Row: 4 sets of 8-10 reps</li>
    <li>Pull-Up: 4 sets of 8-10 reps</li>
    <li>Dumbbell Curl: 3 sets of 10-12 reps</li>
    <li>Face Pull: 3 sets of 12 reps</li>
</ul>
<h4>Day 3: Push (Repeat)</h4>
<ul>
    <li>Incline Bench Press: 4 sets of 8-10 reps</li>
    <li>Dumbbell Shoulder Press: 4 sets of 10 reps</li>
    <li>Chest Dips: 3 sets of 12 reps</li>
    <li>Tricep Pushdown: 3 sets of 12 reps</li>
    <li>Dumbbell Front Raise: 3 sets of 12 reps</li>
</ul>
<h4>Day 4: Pull (Repeat)</h4>
<ul>
    <li>T-Bar Row: 4 sets of 8-10 reps</li>
    <li>Lat Pulldown: 4 sets of 10-12 reps</li>
    <li>Seated Row: 3 sets of 10-12 reps</li>
    <li>Hammer Curl: 3 sets of 10-12 reps</li>
    <li>Shrugs: 3 sets of 12 reps</li>
</ul>`,
'upper-lower-cardio':`<p>Frequency: 5 times per week</p>
<h4>Day 1: Upper Body</h4>
<ul>
    <li>Bench Press: 4 sets of 6-8 reps</li>
    <li>Bent-Over Row: 4 sets of 6-8 reps</li>
    <li>Overhead Press: 3 sets of 8-10 reps</li>
    <li>Pull-Up: 3 sets of 8-10 reps</li>
    <li>Dumbbell Curl: 3 sets of 10-12 reps</li>
    <li>Tricep Dips: 3 sets of 10-12 reps</li>
</ul>
<h4>Day 2: Lower Body</h4>
<ul>
    <li>Squat: 4 sets of 6-8 reps</li>
    <li>Deadlift: 3 sets of 5 reps</li>
    <li>Leg Press: 3 sets of 10-12 reps</li>
    <li>Hamstring Curl: 3 sets of 10-12 reps</li>
    <li>Calf Raise: 4 sets of 12-15 reps</li>
    <li>Hanging Leg Raise: 3 sets of 15 reps</li>
</ul>
<h4>Day 3: Cardio</h4>
<ul>
    <li>Running: 30-45 minutes</li>
    <li>HIIT (High-Intensity Interval Training): 20 minutes</li>
</ul>
<h4>Day 4: Upper Body</h4>
<ul>
    <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
    <li>Lat Pulldown: 4 sets of 8-10 reps</li>
    <li>Dumbbell Shoulder Press: 3 sets of 10-12 reps</li>
    <li>Seated Row: 3 sets of 10-12 reps</li>
    <li>Dumbbell Curl: 3 sets of 12 reps</li>
    <li>Tricep Pushdown: 3 sets of 12 reps</li>
</ul>
<h4>Day 5: Lower Body</h4>
<ul>
    <li>Front Squat: 4 sets of 6-8 reps</li>
    <li>Romanian Deadlift: 4 sets of 8-10 reps</li>
    <li>Leg Curl: 3 sets of 10-12 reps</li>
    <li>Standing Calf Raise: 4 sets of 12-15 reps</li>
    <li>Plank: 3 sets of 60 seconds</li>
</ul>`,
    };

    const workoutPlanDiv = document.getElementById('workout-plan');
    const dropdown = document.getElementById('workout-dropdown');

    dropdown.addEventListener('change', (e) => {
        const selectedPlan = e.target.value;
        workoutPlanDiv.innerHTML = workoutPlans[selectedPlan] || '<p>Select a workout type to view the plan.</p>';
    });

    // Initialize with default selection
    dropdown.dispatchEvent(new Event('change'));
});
