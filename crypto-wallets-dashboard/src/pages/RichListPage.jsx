import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from "react-bootstrap";

import RichListTable from "../components/RichListTable";

require('dotenv').config();

const RichListPage = () => {
    const [richList, setRichList] = useState('');
    const { network } = useParams();

    useEffect(() => {
        async function getRichListData() {
          try{
            if(network === "btc"){
                // const fetchRichList = await fetch(`http://www.tokenview.com:8088/address/richrange/btc/1/100`);
                // const richListData = await fetchRichList.json();
                setRichList({"code":1,"msg":"成功","data":[{"addr":"34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo","balance":265479.68764814},{"addr":"bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97","balance":168009.98536372},{"addr":"1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ","balance":122263.57277776},{"addr":"3LYJfcfHPXYJreMsASk2jkn69LWEYKzexb","balance":116601.13654102},{"addr":"37XuVSEpWW4trkfmvWzegTHQt7BdktSKUs","balance":94505.11456719},{"addr":"38UmuUqPCrFmQo4khkomQwZ4VbY2nZMJ67","balance":84067.01772536},{"addr":"1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF","balance":79957.21697629},{"addr":"bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6","balance":69370.17585302},{"addr":"3Kzh9qAqVWQhEsfQz7zEQL1EuSx5tyNLNS","balance":69232.82013752},{"addr":"1LdRcdxfbSnmCYYNdeYpUnztiYzVfBEQeC","balance":53880.06072455},{"addr":"1AC4fMwgY8j9onSbXEWeH6Zan8QGMSdmtA","balance":51830.35998549},{"addr":"3FpYfDGJSdkMAvZvCrwPHDqdmGqUkTsJys","balance":48239.81631762},{"addr":"3PKgBYdKoXABCa8ec5Ypm73nKeAvJxtnSb","balance":45671.28442428},{"addr":"1LruNZjwamWJXThX2Y8C2d47QqhAkkc5os","balance":44000.08617726},{"addr":"3M219KR5vEneNb47ewrPfWyb5jQ2DjxRP6","balance":43113.0000058},{"addr":"3Gpex6g5FPmYWm26myFq7dW12ntd8zMcCY","balance":40013.96038553},{"addr":"bc1q5shngj24323nsrmxv99st02na6srekfctt30ch","balance":40000.32768183},{"addr":"385cR5DM96n1HvBDMzLHPYcw89fZAXULJP","balance":38601.86558087},{"addr":"3LQUu4v9z6KNch71j7kbj8GPeAGUo1FW6a","balance":37926.97744959},{"addr":"bc1q5pucatprjrqltdp58f92mhqkfuvwpa43vhsjwpxlryude0plzyhqjkqazp","balance":37743.987882},{"addr":"bc1q7ydrtdn8z62xhslqyqtyt38mm4e2c4h3mxjkug","balance":36000.41000054},{"addr":"159QgP4Ewvadjc4HDpaaR6pir2R4ZfzVfQ","balance":34415.00117745},{"addr":"3EJYcQ3c5MpdnmGjHRNrCoRLE859V4uY3F","balance":34406.38401179},{"addr":"3LCGsSmfr24demGvriN4e3ft8wEcDuHFqh","balance":33395.35849572},{"addr":"12XqeqZRVkBDgmPLVY4ZC6Y4ruUUEug8Fx","balance":32354.00000564},{"addr":"1BX5MXZ95rMiQJBH9yKpcmbAt9VcfyAfHE","balance":32353.0007626},{"addr":"bc1qx9t2l3pyny2spqpqlye8svce70nppwtaxwdrp4","balance":31574.03672389},{"addr":"3FHNBLobJnbCTFTVakh5TXmEneyf5PT61B","balance":31275.34535966},{"addr":"13JQwoSLLR3ffXwswe2HCTK9oq4i8MWK3q","balance":31010.01540943},{"addr":"12ib7dApVFvg82TXKycWBNpN8kFyiAN1dr","balance":31000.07042388},{"addr":"338QJMnfvG1hocxHKtMsXVE8ueaAFrW4P5","balance":30406.38375902},{"addr":"3FupZp77ySr7jwoLYEJ9mwzJpvoNBXsBnE","balance":29198.59511918},{"addr":"3MMZmbKm9ZbM2VwqcVpG98thDP5JAhgVvb","balance":28406.38506406},{"addr":"12tkqA9xSoowkzoERHMWNKsTey55YEBqkv","balance":28151.05848732},{"addr":"35ULMyVnFoYaPaMxwHTRmaGdABpAThM4QR","balance":26906.00118088},{"addr":"1ftuUgzrr5hnVzXnFBDjELvVe69rPtBRi","balance":26110.00002},{"addr":"3JZq4atUahhuA9rLhXLMhhTo133J9rF97j","balance":26090.908248},{"addr":"bc1qd4ysezhmypwty5dnw7c8nqy5h5nxg0xqsvaefd0qn5kq32vwnwqqgv4rzr","balance":25000.0001},{"addr":"bc1qjysjfd9t9aspttpjqzv68k0ydpe7pvyd5vlyn37868473lell5tqkz456m","balance":24736.83192955},{"addr":"1NH8vuaJaMXbtj4Qx6iFaQY8btdVcAn9iz","balance":24495.35096768},{"addr":"17MWdxfjPYP2PYhdy885QtihfbW181r1rn","balance":24495.3504297},{"addr":"3JJpCZCk4h4TpQeU7SA1yhH768Xgbtdbfg","balance":24355.50102022},{"addr":"19D5J8c59P2bAkWKvxSYw8scD3KUNWoZ1C","balance":23969.0015367},{"addr":"1ANjYHibCQ6FzagLfeXubC8SQYDfUS5wAJ","balance":23968.00018301},{"addr":"1aXzEKiDJKzkPxTZy9zGc3y1nCDwDPub2","balance":23630.51758452},{"addr":"13urGZAf24LdiAdffGgVSFNXkiqfEyBuEw","balance":23033.30058976},{"addr":"1HP4M9g82YYeybgR3TBHMgDaWnKRbKvKbp","balance":23023.30067134},{"addr":"1932eKraQ3Ad9MeNBHb14WFQbNrLaKeEpT","balance":22899.99043553},{"addr":"3BNunj8mYnKUGWsXyNjfPWoqsYdxGwwR4z","balance":22806.38327398},{"addr":"36KAwNUR8VeLpUfGwdk7LEN6F4yvoRWMjn","balance":22799.98319299},{"addr":"19iqYbeATe4RxghQZJnYVFU4mjUUu76EA6","balance":22670.64933177},{"addr":"1MDq7zyLw6oKichbFiDDZ3aaK59byc6CT8","balance":22400.00017757},{"addr":"3EcoyfYvsBXBwdbdf4SY6DAU84kqS6mNLs","balance":21700.0048249},{"addr":"31zUyEXnzb5gaPM9CK7RCcro5FYx6KRNMV","balance":21206.38284328},{"addr":"3JxUxYenWdUsa6uN9DAWvEpqZwqE7SsDSQ","balance":21200.00419731},{"addr":"3N1saaSMb85dHbiU7CMfsuL5tBqKUeT7H5","balance":21000.00253731},{"addr":"36sf8V4TBPKCSqEz4Z8X1ra8EXrMaJBhAJ","balance":20700.00170731},{"addr":"1LufaFUh7bAscrrSMamdqRdb2iV9Fanfdc","balance":20463.00027077},{"addr":"3DVJfEsDTPkGDvqPCLC41X85L1B1DQWDyh","balance":20406.26414582},{"addr":"3GLkaudvF27MsuTnxU3jqdzpyRTqTNmFTC","balance":20400.00087731},{"addr":"bc1q4c8n5t00jmj8temxdgcc3t32nkg2wjwz24lywv","balance":20214.72746812},{"addr":"3HSMPBUuAPQf6CU5B3qa6fALrrZXswHaF1","balance":20208.87847481},{"addr":"3QJRVfnJpzfNe1dr8hprCQrKJTnuRNwyrw","balance":20206.38278464},{"addr":"bc1qtw30nantkrh7y5ue73gm4mmy0zezfqxug3psr94sd967qwg7f76scfmr9p","balance":20136.23538292},{"addr":"3GQTrVEaRhgGZJzutYhuCsc884WVsd27nq","balance":20100.00005825},{"addr":"17rm2dvb439dZqyMe2d4D6AQJSgg6yeNRn","balance":20008.00192617},{"addr":"3HbbVFoyi5RCnZZvdScMpnnT5mndmLrAxa","balance":19599.99838731},{"addr":"13AtC9b8UYsUsHYYFGYS8izV8LiFyvPLom","balance":19523.30396377},{"addr":"1PeizMg76Cf96nUQrYg8xuoZWLQozU5zGW","balance":19414.43070193},{"addr":"3CoqtedXLFJTSgduUKSn5UNLbEt11fPYe8","balance":19399.99756278},{"addr":"3HAhWeTzbv8muscwgsgbKuVBLWF3PKC7Ds","balance":19199.99674372},{"addr":"bc1q4jchcr7nla277su5lpjzttxp3xg5j8wds5lcwg","balance":19189.19968552},{"addr":"3L1qkMhPuYK7SuGv7ZZRiEFaR8KHanxxCR","balance":18999.99670888},{"addr":"bc1qvpgyac88vqtslewxu7yu9dqwp8rd83zch55zpm3xgn3mgg72w3kqv0s8qa","balance":18929.983896},{"addr":"3K5dmrkBMS8ZVgERMLwiw7PJuG8GWTbo8e","balance":18600.04653628},{"addr":"177a6FZJbJR8HnhrtA55FzQk673x1CARbB","balance":17523.30383438},{"addr":"1AjPJ1eq4VMt3NxBZwAD5BvpajxoGUJ89n","balance":17362.71271755},{"addr":"15HEcdBfaDD9tUxfPxgiPbTJi6ooQb11B2","balance":16979.80262163},{"addr":"3H5JTt42K7RmZtromfTSefcMEFMMe18pMD","balance":16785.94802029},{"addr":"34HpHYiyQwg69gFmCq2BGHjF1DZnZnBeBP","balance":16306.5465148},{"addr":"1GR9qNz7zgtaW5HwwVpEJWMnGWhsbsieCG","balance":15745.55598682},{"addr":"3N9an8wv4SYi3FVXs3xR5k2AqXeNZiw2mf","balance":15499.89138655},{"addr":"32JfeXvWsqbRYVJ1J7yrJ9a9rdZdmMAdRT","balance":15046.21549283},{"addr":"1KUr81aewyTFUfnq4ZrpePZqXixd59ToNn","balance":14999.99866299},{"addr":"39gUvGynQ7Re3i15G3J2gp9DEB9LnLFPMN","balance":14982.25914442},{"addr":"3BMEXqGpG4FxBA1KWhRFufXfSTRgzfDBhJ","balance":14770.12560373},{"addr":"39WQqCosC8ZD4S9XBPHRnnRUeVRvNctnnm","balance":14665.54013735},{"addr":"3BMEXxSMT2b2kvsnC4Q35d2kKJZ4u9bSLh","balance":14642.02691855},{"addr":"3EMVdMehEq5SFipQ5UfbsfMsH223sSz9A9","balance":14510.29081156},{"addr":"3FrM1He2ZDbsSKmYpEZQNGjFTLMgCZZkaf","balance":14000.01442012},{"addr":"1BZaYtmXka1y3Byi2yvXCDG92Tjz7ecwYj","balance":14000.0007098},{"addr":"bc1q080rkmk3kj86pxvf5nkxecdrw6nrx3zzy9xl7q","balance":13161.12400547},{"addr":"bc1q4vxn43l44h30nkluqfxd9eckf45vr2awz38lwa","balance":13003.02066414},{"addr":"3ETUmNhL2JuCFFVNSpk8Bqx2eorxyP9FVh","balance":12825.90879492},{"addr":"14eQD1QQb8QFVG8YFwGz7skyzsvBLWLwJS","balance":12493.7483394},{"addr":"15pqaBHFwFEphRqmXAPbs3QRLLPB7e2uMb","balance":12488.0372398},{"addr":"bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h","balance":12087.31001768},{"addr":"3GWUKxq55XsQ7rkzbxAgfSyf6KHp8Ljh3R","balance":12000.00041297},{"addr":"1C5TB2QzeDDJUE4EQD17NmSyEXTk34huRo","balance":11979.65399013},{"addr":"bc1qqn4q5yv7feltnsfwzxwm3fluryqqzhhp6457h6m4ytq7mauxlxgq872p5f","balance":11797.989018}]});  
            }
          } catch(error){
              console.log('getRichListData', error);
          }
        }
        getRichListData();
    }, [network])    

    return (
        <Container fluid>
            <RichListTable richList={richList.data}/>
        </Container>
    )
}

export default RichListPage;
