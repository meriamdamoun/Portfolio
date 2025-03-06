import express from "express";
import cors from "cors";
import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    getDocs,
  } from "firebase/firestore";

const app = express(); // Initialize Express
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
    cors({
      origin: '*', // Allow multiple origins
      credentials: true,
    })
  );


// Define a simple route
app.get("/api/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = [];
      const querySnapshot = await getDocs(collection(db, "contacts"));
      querySnapshot.forEach((doc) => {
        contacts.push({ id: doc.id, ...doc.data() });
      });
      res.send(contacts);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// Contact Form Submission Route
app.post("/api/post-contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Store contact form data in Firestore
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });

    res.status(200).json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message." });
  }
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on ${port}`);
});
