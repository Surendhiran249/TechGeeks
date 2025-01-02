Transparent Charity Platform Using Blockchain

Team: TechGeeks
This project was developed by the team TechGeeks:
-Surendhiran M
-VijaySyam B K
-Yaswanth G

Tech Stack
This project utilizes the following technologies:
Frontend:
React.js: For building the user interface.
Tailwind CSS: For styling the frontend.
Backend:
Flask: A lightweight Python web framework for building the API.
SQLAlchemy: For interacting with the SQLite database.
Blockchain:
Ganache: A personal Ethereum blockchain used for testing and development.
Truffle: A framework for smart contract development, testing, and deployment.
Prerequisites
Before you start, make sure you have the following installed:

Node.js (for React frontend)
Python 3.x (for Flask backend)
Truffle (for blockchain development)
Ganache (for running a personal blockchain)
Project Setup
Step 1: Clone the Repository
Clone the repository to your local machine:
git clone https://github.com/Surendhiran249/TechGeeks
cd transparent-charity-platform

Step 2: Setting Up the Virtual Environment (Backend)

Create a Virtual Environment (ensure you have venv installed in your Python environment):
python -m venv venv
Activate the Virtual Environment:
venv\Scripts\activate

Install the Requirements: Ensure you have the necessary dependencies installed for the backend:
pip install -r requirements.txt


Step 3: Setting Up the Blockchain (Ganache + Truffle)
Start Ganache:

Open Ganache and start a new workspace. This will spin up a local Ethereum blockchain.
Take note of the accounts and their private keys displayed in Ganache.
Compile and Migrate Smart Contracts with Truffle:

Open a terminal and navigate to the blockchain directory:
cd blockchain
Compile the Contracts  - truffle compile
Migrate the Contracts  - truffle migrate
This will deploy your smart contracts to the Ganache blockchain.

Step 4: Configure the Environment
Setup Environment Variables:

Rename .env.example to .env and fill in the following details:
Blockchain Contract Address: Set it to the address of the deployed contract on Ganache.
Account Addresses: Set them to the Ethereum account addresses from Ganache.
Private Keys: Set the private keys from Ganache for the accounts.
Example .env:
CONTRACT_ADDRESS=your_contract_address_here
ACCOUNT_ADDRESS=your_account_address_here
PRIVATE_KEY=your_private_key_here

Configure Charity Database Path:
In config.py (Backend), ensure the path for the SQLite database (charity_platform.db) is set correctly. The default path might be relative, so ensure it's pointing to the right file location in your project directory.

Step 5: Running the Project
Backend:
Open a terminal and navigate to the backend directory:
cd backend

Run the Flask backend:
python app.py
The backend should now be running on http://localhost:5000.

Frontend:
Open another terminal and navigate to the frontend directory:
cd frontend
Install the required npm dependencies:
npm install
Start the frontend:
npm start
The frontend should now be running on http://localhost:3000.

Step 6: Interact with the Application
Signup/Login:

On the frontend, you can either sign up or log in with a user account.
Make a Donation:

Once logged in, you can donate. This will trigger a transaction on the Ethereum blockchain (through Ganache) and update the donations table in the backend's SQLite database.
Each donation will create a new block in the Ganache blockchain, and the transaction will be logged in the donations table.

Additional Notes:
Virtual Environment: Ensure the virtual environment is activated when running the backend to avoid issues with missing dependencies.
Blockchain Address Configuration: Double-check the contract address and account information in your .env file. Incorrect details will result in errors when interacting with the blockchain.
SQLite Database Path: Ensure the config.py file points to the correct database file (charity_platform.db).
Ganache Transactions: Each donation creates a transaction on the Ganache blockchain, and this is recorded in both the blockchain and the database.

Thank You !!
