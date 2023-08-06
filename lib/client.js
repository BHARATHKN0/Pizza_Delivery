// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "g9pnbrqo",
    dataset: 'production',
    apiVersion: "2023-07-31",
    useCdn:true,
    token:"skK2jWVYb8pL50GThmUsibx4d5lqOoClg2H6IiDv2URuCNOXnreDNXsLLYmvMSNw6E0vExzkdmqhejUJMgmZbKq5Ey1MGIZ7j2UamxUitcxoqmsgT0qOvuOmhuAjU0rGsuNReVIfrrxvSxacMMPCxMIIIlo7xUNii7JucsRHfV0fkzwZNBFC",
    ignoreBrowserTokenWarning: true
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client