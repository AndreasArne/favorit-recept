export const get = async ({ params }) => {
    const allRecipesFiles = import.meta.glob('../recipes/*.md')
    const iterablePostFiles = Object.entries(allRecipesFiles)

    const allRecipes = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const recipePath = path.slice(2, -3) // removes .. and .md

            return {
                meta: metadata,
                path: recipePath,
            }
        })
    )

    const sortedRecipes = allRecipes.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return {
        body: sortedRecipes
    }
}