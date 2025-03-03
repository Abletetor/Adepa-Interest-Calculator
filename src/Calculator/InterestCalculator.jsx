/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import "./InterestCalculator.css";
import { motion } from "framer-motion";

const InterestCalculator = () => {
   const [principal, setPrincipal] = useState("");
   const [duration, setDuration] = useState("");
   const [rate, setRate] = useState("");
   const [type, setType] = useState("monthly");
   const [interest, setInterest] = useState(null);

   const calculateInterest = () => {
      if (!principal || !duration || !rate) return;
      const P = parseFloat(principal);
      const T = parseFloat(duration);
      const R = parseFloat(rate);

      let result =
         type === "monthly" ? (P * R * T) / (100 * 12) : (P * R * T) / 100;

      setInterest(result.toFixed(2));
   };

   const clearFields = () => {
      setPrincipal("");
      setDuration("");
      setRate("");
      setInterest(null);
   };

   return (
      <>
         <motion.div
            className="calculator-container"
            initial={ { opacity: 0, scale: 0.8 } }
            animate={ { opacity: 1, scale: 1 } }
            transition={ { duration: 0.5 } }
         >
            <h2>
               <FaCalculator /> Adepa Interest Calculator
            </h2>

            <div className="input-group">
               <label>Principal Amount (GH¢)</label>
               <input
                  type="number"
                  value={ principal }
                  onChange={ (e) => setPrincipal(e.target.value) }
                  placeholder="Enter amount"
                  min={ 1 }
               />
            </div>

            <div className="input-group">
               <label>Interest Rate (%)</label>
               <input
                  type="number"
                  value={ rate }
                  onChange={ (e) => setRate(e.target.value) }
                  placeholder="Enter interest rate"
                  min={ 0 }
               />
            </div>

            <div className="input-group">
               <label>Duration</label>
               <input
                  type="number"
                  value={ duration }
                  onChange={ (e) => setDuration(e.target.value) }
                  placeholder="Enter months/years"
                  min={ 1 }
               />
            </div>

            <div className="input-group">
               <label>Calculate Per</label>
               <select value={ type } onChange={ (e) => setType(e.target.value) }>
                  <option value="monthly">Month</option>
                  <option value="yearly">Year</option>
               </select>
            </div>

            <div className="button-group">
               <motion.button
                  whileHover={ { scale: 1.1 } }
                  whileTap={ { scale: 0.9 } }
                  onClick={ calculateInterest }
               >
                  Calculate Interest
               </motion.button>

               <motion.button
                  className="clear-btn"
                  whileHover={ { scale: 1.1 } }
                  whileTap={ { scale: 0.9 } }
                  onClick={ clearFields }
               >
                  Clear
               </motion.button>
            </div>

            { interest !== null && (
               <motion.div
                  className="result"
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 1 } }
                  transition={ { duration: 0.5 } }
               >
                  <h3>Your Interest: GH¢{ interest }</h3>
               </motion.div>
            ) }
         </motion.div>

         {/* Footer Section */ }
         <footer className="footer">
            <p>&copy; { new Date().getFullYear() } All right reserved. Designed & Developed by iametor</p>
         </footer>
      </>
   );
};

export default InterestCalculator;
