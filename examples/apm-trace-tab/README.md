# Example APM Trace Tab App

![A new Trace tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/wbub8Z9p/dfdb2efc-a0a6-43e7-a916-78658d1bbdb0.jpg?v=abdfed20bbb179688af4082483d40356)

This is an example App making use of the APM Trace Tab feature.

## Creating the App

1. Create a new App.
    Visit the [Developer Platform](https://app.datadoghq.com/apps) and click the "New App" button to create a new App.

    ![Create a new App](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/YEuOZELE/80c22676-eb23-49ea-bff2-feeca96601bf.jpg?v=0ee79e85c3664530b43d18253fe9f198)

1. Under "UI Extensions," enable the APM Trace Tab feature. Then, click the "Save Changes" button.

    ![Enable APM Trace Tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/z8ur1AO1/067c0ed6-aeee-4ae2-b118-9321033ac6cf.jpg?v=cfce60c3fd3e7fe5cbda8fa2527a0791)

## Using the App

1. Run the App locally.
    You can run this in a terminal to start the App:

    ```Console
    $ yarn && yarn start
    ```

    This will start up a server that runs in the background responding to requests.

1. Visit the [APM Trace List](https://app.datadoghq.com/apm/traces) and select any trace.

1. There should be a new "GitHub User" tab.

    ![A new "GitHub User" tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/wbub8Z9p/dfdb2efc-a0a6-43e7-a916-78658d1bbdb0.jpg?v=abdfed20bbb179688af4082483d40356)
