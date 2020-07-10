const Client = require('../models/Client');

const resolvers = {
    Query: {
        getClientUsers: async() => {
            try {
                const clients = await Client.find({});
                return clients;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        addClientUser: async (_, { input }) => {
            const { username, email,password } = input;
            
            const usernameExist = await Client.findOne({ username });
            const emailExist = await Client.findOne({ email });

            if(usernameExist) {
                throw new Error('The Client with the Username given already exist');
            }

            if(emailExist) {
                throw new Error('The Client with the Email given already exist');
            }

            try {
                const client = new Client(input);
                client.save();
                return client;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;