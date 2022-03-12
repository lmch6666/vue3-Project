interface product {
    id: string
    name: string,
    oldprice: string,
    newprice: string,
    desc: string,
    status: number,
    imgurl: string,
    inventorycount: number,
    salecount: number,
    favorcount: number,
    address: string,
    categoryid: number,
    createAt: string,
    updateAt: string
}

export interface productlist {
    list:Array<product>
}