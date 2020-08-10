# Strapi-Azure 3.1.3

This is a working repository of Strapi 3.1.3 which you can already deploy as an Azure Web App. This requres a paid subscription, minimum of B1 plan (32 USD estimated), so we can enable the 64-bit platform configuration and the Always On feature. 

To get started, let us first create and configure our Azure Web App:

**Create an instance:**

- Name: The name of your choice that is still available
- Publish: Code
- Runtime staci: Node 12 LTS
- Operating System: Windows
- Region: select near you
![Create Instance](https://drive.google.com/uc?id=1dQDNngfR-uk2c49Ez5BjlBhDH_QjEBQV "Create Instance")

- Sku and Size: select B1 (minimum)
![Sku and Size](https://drive.google.com/uc?id=1_CXMHbduk1FhgWSmLDqLQMoTXKhlBUSb "Sku and Size")

**Configure the Environment variables:**
- Add the following key-value pairs:
![Environment variables](https://drive.google.com/uc?id=1w3l9ofll197aERa0Tb0GvGHpPyw4AbAy "Environment variables")

- For the **HOST** make a ping to your *.azurewebsites.net*  instance and get the IP
![Ping](https://drive.google.com/uc?id=1p9V9DoaFAMNGTrPOjbd3crLYdPlvCrpc "Ping")

**Configure the Platform Settings**
- In the *General Settings* tab (beside the *Application Settings*), change the Platform from 32 Bit to 64 Bit
![Platform config](https://drive.google.com/uc?id=1z27I0Dq94n_xZCwzQLvCltsYswA7pRMc "Platform config")

- To confirm if you are indeed now on 64 Bit mode, go to Console and run node **-p "process.arch"**
![64bit](https://drive.google.com/uc?id=1DoZF4UfBejQ_yhXO20aEsKaMf2usxDYy "64bit")

**Install yarn:**
Go again to Console and run: **npm install -g yarn**
![Yarn](https://drive.google.com/uc?id=1yOqe2HJvRW36HfqavqWG2Sb9Jbxp72b_ "Yarn")

**Deploy from your github account a copy of *strapi-azure* repo** 

- In the Deployment Center tab, connect your GitHub account and browse your copy of **strapi-azure**
![Wizard1](https://drive.google.com/uc?id=1NkesfYWGUYxF0_a1LZ-7WTn-yupOpUfw "Wizard2")

- Select **App Service build service** as your build provider 
![Wizard2](https://drive.google.com/uc?id=1fECtJ_nKioWbgrk1261Npgb77APMYUYQ "Wizard2")

- Select repository and branch
![Wizard3](https://drive.google.com/uc?id=1Fe_7KWrovD-EM6u4fvCOFQltNh4sQiGi "Wizard3")
- **Deploy!** 
![Successfully deployed](https://drive.google.com/uc?id=1m1a8R9ll5mA-fzCCvAD2o9w6UFogbqXp "Successfully deployed")


**Build your Admin UI using Kudu service**

- Go to Advance Tools -> Go -> expand Debug console from the toolbar -> CMD
- Inside the wwwroot directory (site/wwwroot/), execute **yarn build**

![Excute yarn build](https://drive.google.com/uc?id=1OfZ2ThazRmxB5eF6r34TSJnYhePMYp_q "Execute yarn build")

![Admin UI built](https://drive.google.com/uc?id=1wiivLA1LAC3X6f215gAglJEjyEQXycsK "Admin UI built")

**See it in action 😊**

![Production live mode](https://drive.google.com/uc?id=1ltKEZeLdyiu_n4UAavID6DKAap34IbKD "Production live mode")
