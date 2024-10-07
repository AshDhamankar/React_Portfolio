[![Netlify Status](https://api.netlify.com/api/v1/badges/d5713c1e-fc6c-4891-9463-8e16fdeaa564/deploy-status)](https://app.netlify.com/sites/ilyasstrh/deploys)

# React Portfolio

A personal portfolio website made with ReactJS.

## Live version
[https://ilyasstrh.netlify.app/](https://ilyasstrh.netlify.app/)

## Getting started

The project was developed with 10.x node version.

### `yarn install`
Install the required packages and dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Portfolio Data Generator

This project includes a tool to help you generate the necessary JSON data for your portfolio. 

To use the generator:

1. Navigate to the `portfolio-generator` directory:
   ```
   cd portfolio-generator
   ```
2. Install the dependencies:
   ```
   yarn install
   ```
3. Start the generator application:
   ```
   yarn start
   ```
4. Open your browser and go to `http://localhost:3000`
5. Fill out the form with your portfolio information
6. Click the "Generate JSON" button to download your `portfolio-data.json` file
7. Replace the existing `src/data/portfolio-data.json` file in the main project with your newly generated file

For more detailed instructions, refer to the `README.md` file in the `portfolio-generator` directory.

## Deployment

Check the main.yml under .github/workflows directory.
Add NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID as **secrets** in your github repository secrets.

## Customizing Your Portfolio

1. Generate your portfolio data using the Portfolio Data Generator tool.
2. Replace the `src/data/portfolio-data.json` file with your generated file.
3. Customize the styles in the `src/styles` directory if desired.
4. Update images in the `public/images` directory with your own.
5. Run `yarn build` to create a production-ready version of your portfolio.
6. Deploy your customized portfolio using the existing GitHub Actions workflow or your preferred method.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).