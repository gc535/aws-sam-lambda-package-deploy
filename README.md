# Deployement

Install package with all dependecy first:
```bash
cd ./lambda
npm install
```

Go to the root directory, and deploy the installed package using aws sam cli:
```bash
sam build
sam deploy --guided
```
You will need to follow the guide and setup the deployment step by step.



## License

[MIT](https://choosealicense.com/licenses/mit/)