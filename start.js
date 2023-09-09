const { exec } = require('child_process');

// Start the frontend server
const frontendProcess = exec('cd frontend && npm start');

// Start the backend server
const backendProcess = exec('cd backend && npm start');

// Forward stdout and stderr from both processes
frontendProcess.stdout.pipe(process.stdout);
frontendProcess.stderr.pipe(process.stderr);
backendProcess.stdout.pipe(process.stdout);
backendProcess.stderr.pipe(process.stderr);

// Handle process exit
frontendProcess.on('exit', (code) => {
  console.log(`Frontend process exited with code ${code}`);
});

backendProcess.on('exit', (code) => {
  console.log(`Backend process exited with code ${code}`);
});
