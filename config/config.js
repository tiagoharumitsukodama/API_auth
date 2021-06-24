const env = process.env.NODE_ENV || 'dev'

const config = () => {
    switch(env){
        case "dev":
            return {
                bd_string: 'mongodb+srv://username_admin:hidekosato@clusterapi.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: "batatafrita2019",
                jwt_expires_in: "7d",
            }
        
        case "html":
            return {
                bd_string: 'mongodb+srv://username_admin:hidekosato@clusterapi.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: "batatafrita2019",
                jwt_expires_in: "7d",
            }
        
        case "prod":
            return {
                bd_string: 'mongodb+srv://username_admin:hidekosato@clusterapi.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: "batatafrita2019",
                jwt_expires_in: "7d",
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`)

module.exports = config()