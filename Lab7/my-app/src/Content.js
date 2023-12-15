import React from "react";
import Image from "./Image";

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            isActiveIntro: true,
            isActiveEnding: true,
            imgSize: 1,
            images: [],
        };
    }

    changeColorIntro = () => {
        var isActive = !this.state.isActiveIntro;
        this.setState({ isActiveIntro: isActive });
    };

    changeColorEnding = () => {
        var isActive = !this.state.isActiveEnding;
        this.setState({ isActiveEnding: isActive });
    };

    createNewImage = () => {
        const newImage = (
            <Image
                key={this.state.images.length}
                style={{ width: 10 + this.state.imgSize +'%',
                height: 10 +  this.state.imgSize+'%'}}
            />
        );
        this.setState((prevState) => ({ images: [...prevState.images, newImage] }));
    };

    deleteImage = () => {
        if (this.state.images.length > 0) {
            const updatedImages = [...this.state.images];
            updatedImages.pop();
            this.setState({ images: updatedImages });
        }
    };

    increaseImageSize = () => {
        this.setState((prevState) => ({ imgSize: prevState.imgSize + 1 }));
    };

    decreaseImageSize = () => {
        this.setState((prevState) => ({ imgSize: prevState.imgSize - 1 }));
    };

    render() {
        return (
            <div>
                <h3>Місце та дата народження:</h3>
                <p> м. Прилуки, 26.11.2003р.</p>

                <h3>Освіта:</h3>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <p>Прилуцька гімназія №5 ім. В.А.Затолокіна;</p>
                    </li>
                    <li>
                        <p>НТУУ "КПІ ім. І.Сікорського"</p>
                    </li>
                </ul>

                <h3> Хобі: </h3>
                <ul>
                    <li>Спорт</li>
                    <li>Танці</li>
                    <li>Комп'ютерні ігри</li>
                </ul>

                <h3> Улюблені фільми: </h3>
                <ol>
                    <li>"1+1", 2011</li>
                    <li>"Академія Амбрелла", 2019</li>
                    <li>"Початок", 2010</li>
                </ol>

                <p id="lviv-intro" onClick={this.changeColorIntro} style={{
                    backgroundColor: this.state.isActiveIntro ? "red" : 'green',
                    color: this.state.isActiveIntro ? '#00FF48' : '#D4478E'
                }}>
                    Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади,
                    національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол,
                    вважається столицею Галичини та центром Західної України. За кількістю населення — п'яте місто країни (717 273
                    станом на 01.01.2022).
                </p>
                <p id="lviv-ending" onClick={this.changeColorEnding} style={{
                    backgroundColor: this.state.isActiveEnding ? "red" : 'green',
                    color: this.state.isActiveEnding ? '#00FF48' : '#D4478E'
                }}>
                    Львів заснував король Данило приблизно у 1231—1235 роках (перша згадка від 1256 року). Близько 1272 року місто
                    стало столицею Королівства Русі (Галицько-Волинського князівства). Невдовзі після смерті князя Юрія II Львів на
                    понад чотири століття опинився під владою Королівства Польського. 1356 року місто отримало маґдебурзьке право; в
                    добу Середньовіччя Львів був важливим торговельним центром. За австрійського панування місто стало осередком
                    українського та польського національного рухів. Після розпаду Австро-Угорщини восени 1918 року Львів деякий час
                    був столицею Західноукраїнської Народної Республіки, але після українсько-польської битви за місто в листопаді
                    1918 перейшов до Польщі, що в 1922—1923 було визнано міжнародними пактами та угодами. Під час Другої світової
                    війни місто захопив Радянський Союз, а згодом — Німеччина. Після війни було юридично закріплено ялтинську угоду
                    1945, за якою Східна Галичина і зокрема Львів лишався у складі Української РСР. 1946 року між Польщею та УРСР
                    відбувся обмін населення, який разом із наслідками війни суттєво вплинув на населення Львова. З 1991 року Львів
                    перебуває у складі України.
                </p>
                
                <div>
                    <button id="add-button" onClick={this.createNewImage}>
                        Add
                    </button>
                    
                    <button id="increase-button" onClick={this.increaseImageSize}>
                        Increase
                    </button>
                    <button id="decrease-button" onClick={this.decreaseImageSize}>Decrease</button>
                    <button id="delete-button" onClick={this.deleteImage}>
                        Delete
                    </button>
                </div>
                <div>
                    {this.state.images}
                </div>
            </div>
        );
    }
}

export default Content;
