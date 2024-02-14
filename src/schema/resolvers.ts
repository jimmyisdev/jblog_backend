

export const resolvers = {
    Query: {
        Query: {
            hello: () => 'Hello from GraphQL!',
        },

    },
    Mutation: {
        //user
        deleteUser: async (parent, { id }) => {

        },
        createUser: async (parent, { input }) => {

        },
        updateUser: async (parent, { input }) => {

        },

        // ---------------------------------expenditure


    },
};

