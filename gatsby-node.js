   //Date pass kaarenga page ma templates ka inside jo birysni ka page ha usma

exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "Biryani",
        component: require.resolve(`./src/templates/Biryani.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Biryani",
            desc:"Quality Biryani Provider. ",
            price:"350pkr"
        },

    });
    console.log("End of Gatsby Node File");
}



   //Automatically create page
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
      if (page.path.match(/^\/product/)) {
      page.matchPath = "/product/*"
      createPage(page)
    }
  }


