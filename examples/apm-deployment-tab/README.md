# Example APM Deployment Tab App

![A new Downloads tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/eDuRyDAg/20c9c442-d78a-4ec2-9a9e-7564fad2f756.jpg?v=b33f5e1e9200e03d89ee557914486f3e)

This is an example App making use of the APM Deployment Tab feature.

## Creating the App

1. Create a new App.
    Visit the [Developer Platform](https://app.datadoghq.com/apps) and click the "New App" button to create a new App.

    ![Create a new App](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/YEuOZELE/80c22676-eb23-49ea-bff2-feeca96601bf.jpg?v=0ee79e85c3664530b43d18253fe9f198)

1. Under "UI Extensions," enable the APM Deployment Tab feature. Then, click the "Save Changes" button.

    ![Enable APM Deployment Tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/v1u0Y8AY/8dabfb50-ec0e-4001-99b6-952da1359252.jpg?v=bbf9ac7edda3cff6d7e53da28e6244f5)

## Using the App

1. Run the App locally.
    You can run this in a terminal to start the App:

    ```Console
    $ yarn && yarn start
    ```

    This will start up a server that runs in the background responding to requests.

1. Visit the [APM Service List](https://app.datadoghq.com/apm/services) and select any service.

    ![Select any service](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/04ux2wP0/4a3d8aaa-f3de-4644-8225-eef17c33155e.jpg?v=3ecc5f0bae2d3dcec047b5cabcc2c2d9)

1. Under the "Deployments" section, select any deployment version.

    ![Select any deployment](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/yAuyrml5/9715c8ff-7088-46ad-bdab-681600fac555.jpg?v=1e0ed8b640f04bc0a0cfba0377e74ed9)

1. There should be a new "Downloads" tab.

    ![A new "Downloads" tab](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/eDuRyDAg/20c9c442-d78a-4ec2-9a9e-7564fad2f756.jpg?v=b33f5e1e9200e03d89ee557914486f3e)
