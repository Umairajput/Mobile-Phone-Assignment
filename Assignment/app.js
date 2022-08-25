var MobilePhones = {
    Iphones: {
        IphoneX: {
            product: "Iphone",
            image: "./Images/IphoneX.png",
            name: "Iphone X",
            price: "60000",
            camera: "48 MP",
            color: ""
        },
        IphoneXSMax: {
            product: "Iphone",
            image: "./Images/iphoneXSmax.jpg",
            name: "Iphone Xs Max",
            price: "120000",
            camera: "64 MP",
            color: ""
        },
        IphoneXI: {
            product: "Iphone",
            image: "./Images/iphonexi.webp",
            name: "Iphone XI",
            price: "150000",
            camera: "64 MP",
            color: ""
        },
        IphoneXII: {
            product: "Iphone",
            image: "./Images/iphonexii.jpg",
            name: "Iphone XII",
            price: "200000",
            camera: "64 MP",
            color: ""
        },
        IphoneXIIIBlack: {
            product: "Iphone",
            image: "./Images/iphone-13-black.jpg",
            name: "Iphone XIII",
            price: "300000",
            camera: "78 MP",
            color: ""
        },
        IphoneXIIIRed: {
            product: "Iphone",
            image: "./Images/Apple-iPhone-13-Red.png",
            name: "Iphone XIII",
            price: "300000",
            camera: "78 MP",
            color: ""
        },
    },
    Samsung: {
        S6: {
            product: "Samsung",
            image: "./Images/samsung-galaxy-s6.jpg",
            name: "Samsung S6",
            price: "20000",
            camera: "32 MP",
            color: ""
        },
        S8: {
            product: "Samsung",
            image: "./Images/samsung S8.jpg",
            name: "Samsung S8",
            price: "25000",
            camera: "48 MP",
            color: ""
        },
        S9: {
            product: "Samsung",
            image: "./Images/Samsung-Galaxy-S9.jpg",
            name: "Samsung S9",
            price: "300000",
            camera: "48 MP",
            color: ""
        },
        S10: {
            product: "Samsung",
            image: "./Images/samsung-galaxy-s10.jpg",
            name: "Samsung S10",
            price: "400000",
            camera: "64 MP",
            color: ""
        },
        SA72: {
            product: "Samsung",
            image: "./Images/samsung-galaxy-a72-4g.jpg",
            name: "Samsung A72",
            price: "700000",
            camera: "78 MP",
            color: ""
        },
    },
    Realme: {
        realme7Pro: {
            product: "Realme",
            image: "./Images/realme-7-pro.jpg",
            name: "Realme 7 Pro",
            price: "500000",
            camera: "64 MP",
            color: ""
        },
        realmeC25: {
            product: "Realme",
            image: "./Images/realmeC25.jpg",
            name: "Realme C25",
            price: "25000",
            camera: "48 MP",
            color: ""
        },
        realmeC11: {
            product: "Realme",
            image: "./Images/realme-c11.jpg",
            name: "Realme C11",
            price: "20000",
            camera: "48 MP",
            color: ""
        },
        realmeC15: {
            product: "Realme",
            image: "./Images/realme-C15.jpg",
            name: "Realme C15",
            price: "20000",
            camera: "48 MP",
            color: ""
        },
        realmeC17: {
            product: "Realme",
            image: "./Images/realme-C11.jpg",
            name: "Realme C11",
            price: "17000",
            camera: "32 MP",
            color: ""
        },
    },
    Redme: {
        redmi8: {
            product: "Redmi",
            image: "./Images/redmi-8.jpg",
            name: "Redmi Note 8",
            price: "30000",
            camera: "48 MP",
            color: ""
        },
        redmi9: {
            product: "Redmi",
            image: "./Images/redmi-9.jpg",
            name: "Redmi Note 9",
            price: "35000",
            camera: "48 MP",
            color: ""
        },
        redmi10: {
            product: "Redmi",
            image: "./Images/redmi-10.jpg",
            name: "Redmi Note 10",
            price: "40000",
            camera: "64 MP",
            color: ""
        },
        redmi11: {
            product: "Redmi",
            image: "./Images/redmi-11.jpg",
            name: "Redmi Note 11",
            price: "50000",
            camera: "64 MP",
            color: ""
        },
    },
    Oppo: {
        oppoA17: {
            product: "Oppp",
            image: "./Images/oppo-A17.jpg",
            name: "Oppo A17",
            price: "25000",
            camera: "32 MP",
            color: ""
        },
        oppoA19: {
            product: "Oppp",
            image: "./Images/oppo-A19.jpg",
            name: "Oppo A19",
            price: "35000",
            camera: "48 MP",
            color: ""
        },
        oppoA21: {
            product: "Oppp",
            image: "./Images/oppo-A21.jpg",
            name: "Oppo A21",
            price: "40000",
            camera: "48 MP",
            color: ""
        },
        oppoA54: {
            product: "Oppp",
            image: "./Images/oppo-A54.webp",
            name: "Oppo A54",
            price: "60000",
            camera: "64 MP",
            color: ""
        },
        oppoA76: {
            product: "Oppp",
            image: "./Images/Oppo-A76.png",
            name: "Oppo A76",
            price: "80000",
            camera: "78 MP",
            color: ""
        },
    }
}

var mobile = Object.keys(MobilePhones)
for (var i = 0; i < mobile.length; i++) {
    var dropdown = document.getElementById("dropdown")
    var option = document.createElement("option")
    var optionText = document.createTextNode(mobile[i])
    option.appendChild(optionText)
    dropdown.appendChild(option)
}
function search() {
    var main = document.getElementById("after_none_div")
        main.style.display = 'none'
    var model = document.getElementById('search').value
    var brand = dropdown.value
    var full = (MobilePhones[brand][model].image)
    var image = document.getElementById("images")
    var imageDiv = document.getElementById("images_div")
    imageDiv.style.width = "300px"
    imageDiv.style.width = "300px"
    imageDiv.style.border = "1px solid black"
    imageDiv.style.marginLeft = "500px"
    image.style.display = 'block'
    imageDiv.style.display = 'block'
    // MobilePhones.image.style.width = "250px"
    image.src = full
    var name = document.getElementById("name")
    name.innerText = ("Name : " + (MobilePhones[brand][model]).name)
    var price = document.getElementById("price")
    price.innerText = ("Price : " + (MobilePhones[brand][model]).price)
}
























