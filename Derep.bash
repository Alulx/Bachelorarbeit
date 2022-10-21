#!/bin/bash

npx hardhat run scripts/deploy.js --network localhost
cd Backend
tsc && node dist/Backend/main
cd ../Frontend 
npm run dev