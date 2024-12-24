const path = require('path');
const fs = require('fs');

// Load services configuration
const servicePath = path.join(__dirname,'../config/services.json');
let services = {};

try{
    const rawData = fs.readFileSync(servicePath);
    services = JSON.parse(rawData).services;
}catch(error){
    console.log('failed to load services configuration',error.message);
    process.exit(1);//exit if services configuration  is mission
}

/**
 * Get the full URL of a service by name
 * @param {string} serviceName - The name of the service (e.g., "cms", "chatSocial", "leaderboard")
 * @returns {string} - The full URL of the service (e.g., "http://localhost:8080")
 * @throws {Error} - Throws error if the service is not defined
 */

function getServiceUrl(serviceName){
      const service = services[serviceName];
      if(!service){
        throw new Error(`Service "${serviceName}" is not defined in configuration.`);
      }
      return `${service.host}:${service.port}`;
}

/**
 * Get all services as an object
 * @returns {Object} - The services object
 */

function getAllServices(){
    return services;
}

module.exports = {
    getServiceUrl,
    getAllServices
}