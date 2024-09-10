// import React, { useState } from 'react';
// import '../Styles/registration.css';

// function Auth({ onAuthSuccess }) {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

//   const handleAuth = async (e) => {
//     e.preventDefault();

//     if (isSignIn) {
//       // Sign In logic
//       const response = await fetch(`http://localhost:5000/users?email=${email}`);
//       const users = await response.json();

//       if (users.length > 0 && users[0].password === password) {
//         onAuthSuccess();
//       } else {
//         alert('Invalid credentials');
//       }
//     } else {
//       // Sign Up logic
//       if (password !== confirmPassword) {
//         alert('Passwords do not match!');
//         return;
//       }

//       const response = await fetch(`http://localhost:5000/users?email=${email}`);
//       const users = await response.json();

//       if (users.length > 0) {
//         alert('User already exists');
//       } else {
//         await fetch('http://localhost:5000/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
//         alert('User registered successfully. Please sign in.');
//         setIsSignIn(true);
//       }
//     }
//   };

//   return (
//     <div className="body">
//       <div className="container">
//         <div className="form-box">
//           <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
//           <form id="signInForm" onSubmit={handleAuth} className="form active">
//             <div className="input-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Show Confirm Password only when signing up */}
//             {!isSignIn && (
//               <div className="input-group">
//                 <label>Confirm Password:</label>
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             )}

//             <button type="submit" className="submit-btn">
//               {isSignIn ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>
//           <button className="toggle-btn" onClick={() => setIsSignIn(!isSignIn)}>
//             {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Auth;

import React, { useState } from 'react';
import '../Styles/registration.css';

function Auth({ onAuthSuccess }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [text, setText]= useState("");
 
  /////// wait function
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      // Sign In logic
      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await response.json();

      if (users.length > 0 && users[0].password === password) {
        onAuthSuccess();
      } else {
        setText("Invalid credentials");
        await wait(6000);
        setText("");
      }
    } else {
      // Sign Up logic
      if (password !== confirmPassword) {
        setText("Password didn't match");  /// setting password match text to screen
        await wait(6000);
        setText("");
        return;
      }

      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await response.json();

      if (users.length > 0) {
        alert('User already exists');
      } else {
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        alert('User registered successfully. Please sign in.');
        setIsSignIn(true);
      }
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="form-box">
          <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <form id="signInForm" onSubmit={handleAuth} className="form active">
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Show Confirm Password only when signing up */}
            {!isSignIn && (
              <div className="input-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <div className='passwordMatch'><p>{text}</p></div>
            <button type="submit" className="submit-btn">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          <button className="toggle-btn" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;