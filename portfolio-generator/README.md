# Portfolio Data Generator

This tool helps you generate the necessary JSON data for your portfolio.

## How to Use

1. Navigate to the `portfolio-generator` directory:
   ```
   cd portfolio-generator
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

5. Fill out the form with your portfolio information

6. Click the "Generate JSON" button to download your `portfolio-data.json` file

7. Replace the existing `portfolio-data.json` file in the main portfolio project with your newly generated file

8. Commit and push the changes to your repository

9. Deploy your updated portfolio

## Development

To modify the generator, edit the `src/PortfolioDataGenerator.js` file. 

To build the project for production, run:
```
npm run build
```

This will create a `build` folder with the production-ready files.