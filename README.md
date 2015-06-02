# License Signer

This node app signs json license data by turning a posting document like this...

    { 
        "app": "IdeaPlugin" 
    }
    
...into a signed document like this:

    {
        "app":"IdeaPlugin",
        "signature":"2bf523f6884668a70dc194a6fc613233874b3ee0566183348e4fe9aaf5bd329356bfe85a4f5f0fe7d08e366ccac0b28544c4fd79f4deb094a85d070a215e8e56b9dc51b9c07043837826f6bf249eeba3d2b7369c6f711cf81da9a4f06b7f9301b7e4cf9065d09abbb5b1525abe5d5d4a276ce761f0b8f7b4028fd27a480d6bbae52495a158300def9b59799c602f6ec0d496c56915a8bca508dea76fb1301ae5a93efb16960c200d903511f14e2eea4f9bba211ad1317a05335c6b34491258f4b5ba1f3a9a6be8363d69706a13720342e53ac6649e021cf7b0f96229be2b9b82139e97d0b3f90e02a0b7e1ace21c4dbc632d99eff5252c4cee6f1698e6d349ed80dd61733d2b80c0645499f7550e75449d18096f6dc2583218cdc6f9934176afd7009c42b1a305b5cf54bac08b4a5f5ebf9baad12ed86f17481bcb451d9be077066026cdba86abae3b70e00f3cb56a7857cf43060351758f5ae12383add052ab8bf4eb0ecdc2df0564d4602b820b55106b0f4484fd31025316112facac236f183be43eb4bffbcfaaaf7b668be36767dee9562e18a96faffb92b3c80e6f50de15204fa10d9a3aaebac0996192e10958d6c7a497fb26eb654fc1bcbb376fd13f58c05565f98cb30620826c53cd2613172493668a2099638da2ce5f5e3592d155fa645062181fd655f81a4878760d711aa26acd455da85ba83b2a3fbede393271c3"
    }
    
## Install

    npm install -g nodemon
    npm install
    
## Run
    nodemon bin/www
    
## Sign

To sign a license, send json data to "/" as the "data" param:

    curl -X POST -d "data={\"foo\":\"bar\"}" http://localhost:3000 > license.json
    
## Verify

You can verify a license from the command line

    node verify.js -f license.json
    