import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
	throw result.error;
}
const { parsed: envs } = result;

console.log(envs);

export default envs;

module.exports = {
	endpoint: process.env.API_URL,
	masterKey: process.env.API_KEY,
	port: process.env.PORT,
};

/*
    created .env file on root folder
    created .env.development file on root folder without commit it
    created .env.production  file on root folder without commit it

*/
