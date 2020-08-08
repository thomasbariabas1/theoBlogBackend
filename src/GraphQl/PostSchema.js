const schema = `
    goodbye: String,
`;

const lookups = {
    goodbye: ()=>{
        return 'Good bye!';
    }
}

export {schema, lookups}
