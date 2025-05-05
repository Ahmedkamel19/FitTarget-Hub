import express from "express";
import User from "../models/user";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";
import { OpenAI } from 'openai'
import FitnessData from '../models/fitnessData';
import UserGenPlan from '../models/userGenPlan';
const openai = new OpenAI({
    apiKey: "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",
})
const router = express.Router();


// const prompt = `You are FitTarget, a smart fitness and nutrition assistant that builds personalized meal plans based on the user's BMI
// You have the following structured food database (JSON) where each food item contains its name, category, and macros per 100g (calories, protein, carbs, fats).
// You have this json data={ "foods": [ { "name": "Chicken breast (skinless)", "category": "high protein", "calories": 165, "protein": 31, "carbs": 0, "fats": 3.6 }, { "name": "Chicken thigh (skin-on)", "category": "high protein", "calories": 209, "protein": 26, "carbs": 0, "fats": 10.9 }, { "name": "Beef (lean, 90%)", "category": "high protein", "calories": 250, "protein": 26, "carbs": 0, "fats": 17 }, { "name": "Salmon", "category": "high protein", "calories": 208, "protein": 20, "carbs": 0, "fats": 13 }, { "name": "Tuna", "category": "high protein", "calories": 132, "protein": 29, "carbs": 0, "fats": 1.3 }, { "name": "Egg (whole)", "category": "high protein", "calories": 143, "protein": 13, "carbs": 1.1, "fats": 9.5 }, { "name": "Egg white", "category": "high protein", "calories": 52, "protein": 11, "carbs": 0.7, "fats": 0.2 }, { "name": "Whole milk", "category": "dairy", "calories": 61, "protein": 3.2, "carbs": 4.8, "fats": 3.3 }, { "name": "Skim milk", "category": "dairy", "calories": 34, "protein": 3.4, "carbs": 5, "fats": 0.1 }, { "name": "Greek yogurt (plain, non-fat)", "category": "dairy", "calories": 59, "protein": 10, "carbs": 3.6, "fats": 0.4 }, { "name": "Cheddar cheese", "category": "dairy", "calories": 402, "protein": 25, "carbs": 1.3, "fats": 33 }, { "name": "Mozzarella (whole milk)", "category": "dairy", "calories": 280, "protein": 22, "carbs": 2.2, "fats": 22 }, { "name": "White rice (cooked)", "category": "carbs", "calories": 130, "protein": 2.7, "carbs": 28, "fats": 0.3 }, { "name": "Brown rice (cooked)", "category": "carbs", "calories": 111, "protein": 2.6, "carbs": 23, "fats": 0.9 }, { "name": "Oats (raw)", "category": "carbs", "calories": 389, "protein": 16.9, "carbs": 66.3, "fats": 6.9 }, { "name": "Whole wheat bread", "category": "carbs", "calories": 247, "protein": 13, "carbs": 41, "fats": 4.2 }, { "name": "White bread", "category": "carbs", "calories": 265, "protein": 9, "carbs": 49, "fats": 3.2 }, { "name": "Pasta (cooked)", "category": "carbs", "calories": 131, "protein": 5, "carbs": 25, "fats": 1.1 }, { "name": "Potato (boiled)", "category": "carbs", "calories": 87, "protein": 2, "carbs": 20, "fats": 0.1 }, { "name": "Sweet potato (boiled)", "category": "carbs", "calories": 86, "protein": 1.6, "carbs": 20, "fats": 0.1 }, { "name": "Apple", "category": "fruits", "calories": 52, "protein": 0.3, "carbs": 14, "fats": 0.2 }, { "name": "Banana", "category": "fruits", "calories": 89, "protein": 1.1, "carbs": 23, "fats": 0.3 }, { "name": "Orange", "category": "fruits", "calories": 47, "protein": 0.9, "carbs": 12, "fats": 0.1 }, { "name": "Strawberries", "category": "fruits", "calories": 32, "protein": 0.7, "carbs": 7.7, "fats": 0.3 }, { "name": "Watermelon", "category": "fruits", "calories": 30, "protein": 0.6, "carbs": 7.6, "fats": 0.2 }, { "name": "Avocado", "category": "fruits", "calories": 160, "protein": 2, "carbs": 9, "fats": 15 }, { "name": "Broccoli", "category": "vegetables", "calories": 55, "protein": 3.7, "carbs": 11, "fats": 0.6 }, { "name": "Carrot", "category": "vegetables", "calories": 41, "protein": 0.9, "carbs": 10, "fats": 0.2 }, { "name": "Spinach", "category": "vegetables", "calories": 23, "protein": 2.9, "carbs": 3.6, "fats": 0.4 }, { "name": "Tomato", "category": "vegetables", "calories": 18, "protein": 0.9, "carbs": 3.9, "fats": 0.2 }, { "name": "Cucumber", "category": "vegetables", "calories": 15, "protein": 0.6, "carbs": 3.6, "fats": 0.1 }, { "name": "Lentils (cooked)", "category": "legumes", "calories": 116, "protein": 9, "carbs": 20, "fats": 0.4 }, { "name": "Almonds", "category": "nuts", "calories": 579, "protein": 21, "carbs": 22, "fats": 49 }, { "name": "Peanuts", "category": "nuts", "calories": 567, "protein": 25, "carbs": 16, "fats": 49 }, { "name": "Walnuts", "category": "nuts", "calories": 654, "protein": 15, "carbs": 14, "fats": 65 }, { "name": "Cashews", "category": "nuts", "calories": 157, "protein": 5, "carbs": 9, "fats": 12 }, { "name": "Pistachio", "category": "nuts", "calories": 159, "protein": 6, "carbs": 8, "fats": 14 }, { "name": "Hazelnuts", "category": "nuts", "calories": 178, "protein": 4, "carbs": 5, "fats": 17 }, { "name": "Raisins", "category": "fruits", "calories": 85, "protein": 1, "carbs": 22, "fats": 0 }, { "name": "Olive oil", "category": "fats", "calories": 884, "protein": 0, "carbs": 0, "fats": 100 }, { "name": "Butter", "category": "fats", "calories": 717, "protein": 0.9, "carbs": 0.1, "fats": 81 }, { "name": "Coconut oil", "category": "fats", "calories": 862, "protein": 0, "carbs": 0, "fats": 100 }, { "name": "Honey", "category": "sweets", "calories": 304, "protein": 0.3, "carbs": 82, "fats": 0 }, { "name": "Dark chocolate (70–85%)", "category": "sweets", "calories": 598, "protein": 7.9, "carbs": 46, "fats": 42 }, { "name": "بلح الشام", "category": "sweets", "calories": 303, "protein": 6, "carbs": 50, "fats": 9 }, { "name": "كنافة بالقشطة", "category": "sweets", "calories": 422, "protein": 6, "carbs": 50, "fats": 22 }, { "name": "كنافة بالنوتيلا", "category": "sweets", "calories": 574, "protein": 7, "carbs": 70, "fats": 30 }, { "name": "بسبوسة", "category": "sweets", "calories": 576, "protein": 6, "carbs": 75, "fats": 28 }, { "name": "بسبوسة بالمكسرات", "category": "sweets", "calories": 720, "protein": 9, "carbs": 81, "fats": 40 }, { "name": "زلابية (لقمة القاضي)", "category": "sweets", "calories": 430, "protein": 4, "carbs": 45, "fats": 26 } ] } this data contain food with its macros per 100gm so i want you to make a task
// The user will input their BMI. total calories of 4 meals is equal to total bmi calories  of user

// You will calculate daily caloric needs based on BMI using this guide:

// take target from user as 

// 2700 kcal/day (gain)
// 2200 kcal/day (maintain)
// 1800 kcal/day (mild loss)
// 1500 kcal/day (weight loss)
// Split daily calories into 4 meals (Breakfast, Lunch, Snack, Dinner).

// For each meal:

// Randomly generate 3–5 ingredients (smart selection).

// Each ingredient must be chosen based on macro category balance (protein, carbs, fats).
// Display output as follows
// your target is as user insert
// and generate 4 meals with its macros `




// router.get("/", checkAuth, async (req, res) => {
//     // const userMessage = typeof req.query.q === 'string' ? req.query.q : '';
//     const userMessage="hi"
//     const user = await User.findOne({ email: req.user });

//   const subscriptions = await stripe.subscriptions.list(
//     {
//       customer: user.stripeCustomerId,
//       status: "all",
//       expand: ["data.default_payment_method"],
//     },
//     {
//       apiKey: process.env.STRIPE_SECRET_KEY,
//     }
//   );

//   if (!subscriptions.data.length) return res.json([]);

//   //@ts-ignore
//   const plan = subscriptions.data[0].plan.nickname;
//   if (!userMessage) {
//     return res.status(400).json({ error: 'Query parameter "q" is required.' });
//     }
//   if (plan === "All-In-One Plan") {

//     try {
//         const chatCompletion = await openai.chat.completions.create({
//             model: 'gpt-4',
//             messages: [
//                 { role: 'system', content: prompt },
//                 { role: 'user', content: userMessage }
//             ],
//         });

//         const reply = chatCompletion.choices[0].message.content;
//         res.set('Content-Type', 'text/html').send(reply);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Something went wrong.' });
//     }
//   } else if (plan === "Workout Plan") {
//     try {
//         const chatCompletion = await openai.chat.completions.create({
//             model: 'gpt-4',
//             messages: [
//                 { role: 'system', content: prompt },
//                 { role: 'user', content: userMessage }
//             ],
//         });

//         const reply = chatCompletion.choices[0].message.content;
//         res.set('Content-Type', 'text/html').send(reply);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Something went wrong.' });
//     }
//   } else {
//     try {
//         const chatCompletion = await openai.chat.completions.create({
//             model: 'gpt-4',
//             messages: [
//                 { role: 'system', content: prompt },
//                 { role: 'user', content: userMessage }
//             ],
//         });

//         const reply = chatCompletion.choices[0].message.content;
//         res.set('Content-Type', 'text/html').send(reply);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Something went wrong.' });
//     }
//   }

// });




// router.get("/", checkAuth, async (req, res) => {

//     // Step 1: Check if the user has a subscription
//     const user = await User.findOne({ email: req.user });

//     if (!user) {
//         return res.status(404).json({ error: 'User not found.' });
//     }

//     const subscriptions = await stripe.subscriptions.list(
//         {
//             customer: user.stripeCustomerId,
//             status: "all",
//             expand: ["data.default_payment_method"],
//         },
//         {
//             apiKey: process.env.STRIPE_SECRET_KEY,
//         }
//     );

//     if (!subscriptions.data.length) {
//         return res.json({ error: "You have no subscription" });
//     }

//     // Step 2: Check if the user has fitness data
//     const fitnessData = await FitnessData.findOne({ email: req.user });

//     if (!fitnessData) {
//         return res.status(400).json({ error: 'Please fill out your fitness data form first.' });
//     }


//     //@ts-ignore
//     const plan = subscriptions.data[0].plan.nickname;

//     // Step 4: Generate plans based on the subscription plan
//     async function Gpt(prompt: string, userMessage: string): Promise<string> {
//         const openai = new OpenAI({
//             apiKey: "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", // Replace with your actual API key
//         });

//         try {
//             const chatCompletion = await openai.chat.completions.create({
//                 model: 'gpt-4',
//                 messages: [
//                     { role: 'system', content: prompt },
//                     { role: 'user', content: userMessage }
//                 ],
//             });

//             const content = chatCompletion.choices[0].message.content;
//             if (!content) throw new Error('No content received from OpenAI');
//             return content;
//         } catch (error: any) {
//             console.error(error);
//             throw new Error('Something went wrong with OpenAI request.');
//         }
//     }

//     const ifThersIsPlan = await UserGenPlan.findOne({ email: req.user });

//     if (ifThersIsPlan) {
//         return res.json(ifThersIsPlan); // If plan already exists, return it
//     }

//     try {
//         const goal = fitnessData.goal;
//         const calories = fitnessData.calories; // Assuming calories is stored in the fitness data
//         const activeDays = fitnessData.activeDays;

//         let responseContent = "";

//         if (plan === "All-In-One Plan") {
//             const userMessage = `Generate a personalized fitness plan for a user with the goal of ${goal}. 
//             Include both diet and workout information.
//             The diet plan should consider a total calorie intake of ${calories} calories per day.
//             The workout plan should be based on the user's activity level of ${activeDays}.`;
//             const prompt = `you are generate only nutrition plan and workout plan`;

//             responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

//             // Save generated plan to UserGenPlan
//             const userPlan = new UserGenPlan({
//                 email: req.user,
//                 genPlan: responseContent,
//             });
//             await userPlan.save();  // Ensure the plan is saved
//             return res.json(userPlan); // Send the generated plan back
//         } else if (plan === "Workout Plan") {
//             const userMessage = `Generate a personalized workout plan for a user with the goal of ${goal}.
//             The workout plan should be based on the user's activity level of ${activeDays}.`;
//             const prompt = `you are generate only workout plan`;

//             responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

//             // Save generated plan to UserGenPlan
//             const userPlan = new UserGenPlan({
//                 email: req.user,
//                 genPlan: responseContent,
//             });
//             await userPlan.save();  // Ensure the plan is saved
//             return res.json(userPlan); // Send the generated plan back
//         } else if (plan === "Nutrition Plan") {
//             const userMessage = `Generate a personalized nutrition plan for a user with the goal of ${goal}.
//             The diet plan should consider a total calorie intake of ${calories} calories per day.`;
//             const prompt = `you are generate only nutrition plan`;

//             responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

//             // Save generated plan to UserGenPlan
//             const userPlan = new UserGenPlan({
//                 email: req.user,
//                 genPlan: responseContent,
//             });
//             await userPlan.save();  // Ensure the plan is saved
//             return res.json(userPlan); // Send the generated plan back
//         }

//     } catch (error) {
//         console.error('Error generating plan:', error);
//         return res.status(500).json({ error: 'Something went wrong while generating the plan.' });
//     }
// });

async function Gpt(prompt: string, userMessage: string): Promise<string> {
    const openai = new OpenAI({
        apiKey: "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", // Replace with your actual API key
    });

    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: prompt },
                { role: 'user', content: userMessage }
            ],
        });

        const content = chatCompletion.choices[0].message.content;
        if (!content) throw new Error('No content received from OpenAI');
        return content;
    } catch (error: any) {
        console.error(error);
        throw new Error('Something went wrong with OpenAI request.');
    }
}

router.get("/", checkAuth, async (req, res) => {

    try {
        // Step 1: Check if the user has a subscription
        const user = await User.findOne({ email: req.user });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const subscriptions = await stripe.subscriptions.list(
            {
                customer: user.stripeCustomerId,
                status: "all",
                expand: ["data.default_payment_method"],
            },
            {
                apiKey: process.env.STRIPE_SECRET_KEY,
            }
        );

        if (!subscriptions.data.length) {
            return res.json({ msg: "You have no subscription" });
        }

        // Step 2: Check if the user has fitness data
        const fitnessData = await FitnessData.findOne({ email: req.user });

        if (!fitnessData) {
            return res.status(400).json({ msg: 'Please fill out your fitness data form first.' });
        }

        //@ts-ignore
        const plan = subscriptions.data[0].plan.nickname;

        // Step 4: Generate plans based on the subscription plan
        

        const ifThersIsPlan = await UserGenPlan.findOne({ email: req.user });

        if (ifThersIsPlan) {
            return res.json(ifThersIsPlan); // If plan already exists, return it
        }

        const goal = fitnessData.goal;
        const calories = fitnessData.calories; // Assuming calories is stored in the fitness data
        const activeDays = fitnessData.activeDays;

        let responseContent = "";

        // Generate the plan based on the user's subscription plan
        if (plan === "All-In-One Plan") {
            const userMessage = `Generate a personalized fitness plan for a user with the goal of ${goal}. 
            Include both diet and workout information.
            The diet plan should consider a total calorie intake of ${calories} calories per day.
            The workout plan should be based on the user's activity level of ${activeDays}.`;
            const prompt = `
You are FitTarget, a smart fitness assistant that generates both personalized meal and workout plans based on the user's BMI and goal (gain, maintain, mild loss, or weight loss).

User will input their BMI and goal (gain, maintain, mild loss, weight loss). Based on this, you will generate:
1. A personalized **nutrition plan** that includes daily meal suggestions and their macros (protein, carbs, fats).
2. A personalized **workout plan** based on a selected split (Push-Pull-Legs (PPL), Upper-Lower Split, or Push-Pull-Legs Pro Split), tailored to the user's fitness goal.

### Nutrition Plan:
For the nutrition plan, use the following caloric targets based on the user's goal:
- 2700 kcal/day for gain
- 2200 kcal/day for maintenance
- 1800 kcal/day for mild loss
- 1500 kcal/day for weight loss

Split the daily calories into **4 meals** (Breakfast, Lunch, Snack, Dinner), each with randomly selected ingredients from a food database. Ensure the meals are balanced with protein, carbs, and fats.

### Exercise Database:
- **Push-Pull-Legs (PPL)** or **Upper-Lower Split** or **Push-Pull-Legs Pro Split** for the workout plan.
  - For **Push Day** (Chest, Shoulders, Triceps)
  - For **Pull Day** (Back, Biceps)
  - For **Leg Day** (Legs, Glutes, Hamstrings)
  
For each workout, suggest exercises with sets, reps, and target muscle groups.

### Example Output Format:
The output will contain two sections: **Nutrition Plan** and **Workout Plan**.

---

### **Nutrition Plan**

**User Goal: Gain (2700 kcal/day)**

**Daily Caloric Target: 2700 kcal/day**

---

**Meal 1: Breakfast**
- **Ingredients**: Chicken breast, Oats, Almonds
- **Calories**: 700 kcal
- **Macro breakdown**: Protein: 45g, Carbs: 50g, Fats: 25g

---

**Meal 2: Lunch**
- **Ingredients**: Salmon, Brown rice, Broccoli
- **Calories**: 800 kcal
- **Macro breakdown**: Protein: 50g, Carbs: 75g, Fats: 30g

---

**Meal 3: Snack**
- **Ingredients**: Greek yogurt, Banana, Honey
- **Calories**: 500 kcal
- **Macro breakdown**: Protein: 20g, Carbs: 75g, Fats: 10g

---

**Meal 4: Dinner**
- **Ingredients**: Beef (lean), Sweet potato, Spinach
- **Calories**: 700 kcal
- **Macro breakdown**: Protein: 60g, Carbs: 50g, Fats: 25g

---

### **Workout Plan**

**User Goal: Gain (2700 kcal/day)**

**Workout Plan for the Week (Push-Pull-Legs Split):**

---

**Day 1: Push (Chest, Shoulders, Triceps)**
- **Exercise**: Bench Press (3 sets of 8 reps)
- **Target Muscles**: Chest, Shoulders, Triceps
- **Category**: Strength

- **Exercise**: Overhead Press (3 sets of 8 reps)
- **Target Muscles**: Shoulders, Triceps
- **Category**: Strength

- **Exercise**: Tricep Dips (3 sets of 8 reps)
- **Target Muscles**: Triceps
- **Category**: Strength

---

**Day 2: Pull (Back, Biceps)**
- **Exercise**: Deadlift (3 sets of 6 reps)
- **Target Muscles**: Full Body, Back
- **Category**: Strength

- **Exercise**: Pull-ups (3 sets of 8 reps)
- **Target Muscles**: Back, Biceps
- **Category**: Strength

- **Exercise**: Barbell Rows (3 sets of 8 reps)
- **Target Muscles**: Back, Biceps
- **Category**: Strength

---

**Day 3: Legs (Legs, Glutes)**
- **Exercise**: Squat (3 sets of 8 reps)
- **Target Muscles**: Legs, Glutes, Core
- **Category**: Strength

- **Exercise**: Leg Press (3 sets of 10 reps)
- **Target Muscles**: Legs, Glutes
- **Category**: Strength

- **Exercise**: Calf Raises (3 sets of 12 reps)
- **Target Muscles**: Calves
- **Category**: Strength

---

**Day 4: Push (Chest, Shoulders, Triceps)**
- **Exercise**: Incline Dumbbell Press (3 sets of 8 reps)
- **Target Muscles**: Chest, Shoulders
- **Category**: Strength

- **Exercise**: Dumbbell Shoulder Press (3 sets of 8 reps)
- **Target Muscles**: Shoulders, Triceps
- **Category**: Strength

- **Exercise**: Push-ups (3 sets of 12 reps)
- **Target Muscles**: Chest, Shoulders, Triceps
- **Category**: Strength

---

### Notes:
- The nutrition plan will display 4 meals, each with ingredients, calories, and macros.
- The workout plan will display 4 workouts, each day clearly separated with exercises, sets, reps, and target muscles.
`;



            responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

            // Save generated plan to UserGenPlan
            const userPlan = new UserGenPlan({
                email: req.user,
                genPlan: responseContent,
            });
            await userPlan.save();  // Ensure the plan is saved
            return res.json(userPlan); // Send the generated plan back
        } else if (plan === "Workout Plan") {
            const userMessage = `Generate a personalized workout plan for a user with the goal of ${goal}.
            The workout plan should be based on the user's activity level of ${activeDays}.`;
            const prompt = `
You are FitTarget, a smart fitness assistant that creates personalized workout plans based on the user's goal (gain, maintain, mild loss, or weight loss).

User will input their BMI and goal (gain, maintain, mild loss, weight loss). Based on their goal, you will generate a list of 4 workouts (one for each day of the week) that align with their fitness target using one of the following splits: Push-Pull-Legs (PPL), Upper-Lower Split, or Push-Pull-Legs Pro Split.

The exercises database includes the following categories:
- **Gain**: Strength-building exercises focused on increasing muscle mass, such as heavy weightlifting and compound movements.
- **Maintain**: Moderate intensity exercises aimed at maintaining current muscle mass and cardiovascular fitness.
- **Mild Loss**: Workouts with a balance of strength and cardio to promote fat loss while maintaining muscle.
- **Weight Loss**: High-intensity exercises focused on fat burning, with an emphasis on cardio and metabolic conditioning.

### Upper-Lower Split Exercises:
- **Upper Body Day**:
  - **Bench Press**: Category: Strength (Target: Chest, Shoulders, Triceps)
  - **Pull-ups**: Category: Strength (Target: Back, Biceps)
  - **Overhead Press**: Category: Strength (Target: Shoulders, Triceps)
  - **Barbell Rows**: Category: Strength (Target: Back, Biceps)
  - **Chest Fly (Machine or Dumbbells)**: Category: Strength (Target: Chest)
  - **Dumbbell Shoulder Press**: Category: Strength (Target: Shoulders, Triceps)
  - **Barbell Bicep Curl**: Category: Strength (Target: Biceps)
  - **Tricep Dips**: Category: Strength (Target: Triceps)

- **Lower Body Day**:
  - **Squat**: Category: Strength (Target: Legs, Glutes, Core)
  - **Leg Press**: Category: Strength (Target: Legs, Glutes)
  - **Romanian Deadlift**: Category: Strength (Target: Hamstrings, Glutes)
  - **Lunges**: Category: Strength (Target: Legs, Glutes)
  - **Leg Curls (Machine)**: Category: Strength (Target: Hamstrings)
  - **Step-ups**: Category: Strength (Target: Legs, Glutes)
  - **Calf Raises**: Category: Strength (Target: Calves)

### Push-Pull-Legs (PPL) Pro Split:
- **Push Day (Chest, Shoulders, Triceps)**:
  - **Bench Press**: Category: Strength (Target: Chest, Shoulders, Triceps)
  - **Incline Dumbbell Press**: Category: Strength (Target: Chest, Shoulders)
  - **Overhead Press**: Category: Strength (Target: Shoulders, Triceps)
  - **Chest Fly (Machine or Dumbbells)**: Category: Strength (Target: Chest)
  - **Dumbbell Shoulder Press**: Category: Strength (Target: Shoulders, Triceps)
  - **Tricep Dips**: Category: Strength (Target: Triceps)
  - **Push-ups**: Category: Strength (Target: Chest, Shoulders, Triceps)

- **Pull Day (Back, Biceps)**:
  - **Deadlift**: Category: Strength (Target: Full Body, Back)
  - **Pull-ups**: Category: Strength (Target: Back, Biceps)
  - **Lat Pulldown**: Category: Strength (Target: Back, Shoulders)
  - **Barbell Rows**: Category: Strength (Target: Back, Biceps)
  - **Seated Row (Machine)**: Category: Strength (Target: Back)
  - **Barbell Bicep Curl**: Category: Strength (Target: Biceps)
  - **Face Pulls**: Category: Strength (Target: Rear Shoulders, Upper Back)

- **Leg Day (Legs, Glutes, Hamstrings)**:
  - **Squat**: Category: Strength (Target: Legs, Glutes, Core)
  - **Leg Press**: Category: Strength (Target: Legs, Glutes)
  - **Lunges**: Category: Strength (Target: Legs, Glutes)
  - **Leg Curls (Machine)**: Category: Strength (Target: Hamstrings)
  - **Romanian Deadlift**: Category: Strength (Target: Hamstrings, Glutes)
  - **Calf Raises**: Category: Strength (Target: Calves)
  - **Step-ups**: Category: Strength (Target: Legs, Glutes)

### User Goal:
User input includes their BMI and goal. Based on this, you will suggest 4 workouts (one per day) for the week using one of the following splits:
- **Upper-Lower Split**: Focuses on alternating between upper body and lower body days.
- **Push-Pull-Legs (PPL) Split**: Focuses on separate push, pull, and legs days.
- **Push-Pull-Legs (PPL) Pro Split**: A more advanced version of the PPL split with a higher frequency of push, pull, and leg days.

### Format:
The output should be clearly organized with each workout listed under its corresponding day. Ensure each workout is formatted neatly, with exercise name, sets/reps, and target muscles visible for the user to follow easily.

Example output:

**User Goal: Gain (2700 kcal/day)**

**Workout Plan for the Week (Upper-Lower Split):**

---

**Day 1: Upper Body**
- **Exercise**: Bench Press (3 sets of 8 reps)
- **Target Muscles**: Chest, Shoulders, Triceps
- **Category**: Strength

- **Exercise**: Pull-ups (3 sets of 8 reps)
- **Target Muscles**: Back, Biceps
- **Category**: Strength

- **Exercise**: Barbell Rows (3 sets of 8 reps)
- **Target Muscles**: Back, Biceps
- **Category**: Strength

---

**Day 2: Lower Body**
- **Exercise**: Squat (3 sets of 8 reps)
- **Target Muscles**: Legs, Glutes, Core
- **Category**: Strength

- **Exercise**: Leg Press (3 sets of 10 reps)
- **Target Muscles**: Legs, Glutes
- **Category**: Strength

- **Exercise**: Calf Raises (3 sets of 12 reps)
- **Target Muscles**: Calves
- **Category**: Strength

---

**Day 3: Upper Body**
- **Exercise**: Overhead Press (3 sets of 8 reps)
- **Target Muscles**: Shoulders, Triceps
- **Category**: Strength

- **Exercise**: Chest Fly (3 sets of 10 reps)
- **Target Muscles**: Chest
- **Category**: Strength

- **Exercise**: Tricep Dips (3 sets of 8 reps)
- **Target Muscles**: Triceps
- **Category**: Strength

---

**Day 4: Lower Body**
- **Exercise**: Romanian Deadlift (3 sets of 8 reps)
- **Target Muscles**: Hamstrings, Glutes
- **Category**: Strength

- **Exercise**: Lunges (3 sets of 10 reps)
- **Target Muscles**: Legs, Glutes
- **Category**: Strength

- **Exercise**: Step-ups (3 sets of 10 reps)
- **Target Muscles**: Legs, Glutes
- **Category**: Strength

---

This layout will ensure the workout plan is easy to read, and each day’s exercises are clearly organized with sets/reps and target muscle groups.

`;



            responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

            // Save generated plan to UserGenPlan
            const userPlan = new UserGenPlan({
                email: req.user,
                genPlan: responseContent,
            });
            await userPlan.save();  // Ensure the plan is saved
            return res.json(userPlan); // Send the generated plan back
        } else if (plan === "Nutrition Plan") {
            const userMessage = `Generate a personalized nutrition plan for a user with the goal of ${goal}.
            The diet plan should consider a total calorie intake of ${calories} calories per day.`;
        const prompt = `
            You are FitTarget, a smart fitness and nutrition assistant. Based on the user's BMI, you will calculate their daily caloric needs and provide a personalized meal plan.
            
            User will input their BMI and goal (gain, maintain, mild loss, weight loss). Use the following caloric targets based on the user's goal:
            - 2700 kcal/day for gain
            - 2200 kcal/day for maintenance
            - 1800 kcal/day for mild loss
            - 1500 kcal/day for weight loss
            
            Once the daily caloric needs are calculated, you will split this into 4 meals (Breakfast, Lunch, Snack, Dinner), ensuring the total calories from the 4 meals equal the user's daily caloric target.
            
            For each meal:
            - Randomly select 3–5 ingredients from a food database (macros: protein, carbs, fats).
            - Ensure macro balance across meals (e.g., each meal has a good mix of protein, carbs, and fats).
            
            Display the following information:
            1. The user's target calories for the day.
            2. A table or separate list of 4 meals with the following details for each meal:
               - Meal name (Breakfast, Lunch, Snack, Dinner)
               - List of ingredients (3–5)
               - Calories per meal
               - Macro breakdown (protein, carbs, fats)
            
            Make sure the calories from all meals add up to the total daily target. Format the output as follows:
            
            User Target Calories: [User's Target Calories]
            
            Meal 1: Breakfast
            - Ingredients: [Ingredient 1, Ingredient 2, Ingredient 3, ...]
            - Calories: [Calories for Breakfast]
            - Macro breakdown: Protein: [Protein]g, Carbs: [Carbs]g, Fats: [Fats]g
            
            Meal 2: Lunch
            - Ingredients: [Ingredient 1, Ingredient 2, Ingredient 3, ...]
            - Calories: [Calories for Lunch]
            - Macro breakdown: Protein: [Protein]g, Carbs: [Carbs]g, Fats: [Fats]g
            
            Meal 3: Snack
            - Ingredients: [Ingredient 1, Ingredient 2, Ingredient 3, ...]
            - Calories: [Calories for Snack]
            - Macro breakdown: Protein: [Protein]g, Carbs: [Carbs]g, Fats: [Fats]g
            
            Meal 4: Dinner
            - Ingredients: [Ingredient 1, Ingredient 2, Ingredient 3, ...]
            - Calories: [Calories for Dinner]
            - Macro breakdown: Protein: [Protein]g, Carbs: [Carbs]g, Fats: [Fats]g
            `;
            
            

            responseContent = await Gpt(prompt, userMessage);  // Await the Gpt response

            // Save generated plan to UserGenPlan
            const userPlan = new UserGenPlan({
                email: req.user,
                genPlan: responseContent,
            });
            await userPlan.save();  // Ensure the plan is saved
            return res.json(userPlan); // Send the generated plan back
        }

    } catch (error:any) {
        console.error('Error generating plan:', error);
        return res.status(500).json({ error: 'Something went wrong while generating the plan.', message: error.message });
    }
});

export default router;

