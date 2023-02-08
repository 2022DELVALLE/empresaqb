import React from "react";
import '../styles/containersStyles/Details.scss';

import logoBackgroundWhite from '@logos/logo-background-white.png';

const Details = () => {

    const [numberCant, setnumbercant] = React.useState(1);


    return (
        <div>
            <div>
                <div className="row">
                    <div className="col">
                        <div className="p-3 ">
                            <div>
                                <div className="gallery">
                                    <img className="img-fluid w-100 pb-2"
                                        src={logoBackgroundWhite}
                                        id="MainImg" alt="" />
                                </div>
                                <div className="small-img-group">
                                    <div className="small-img-col">
                                        <img src={logoBackgroundWhite}
                                            width="100%" className="small-img" alt="" />
                                    </div>
                                    <div className="small-img-col">
                                        <img src={logoBackgroundWhite}
                                            width="100%" className="small-img" alt="" />
                                    </div>
                                    <div className="small-img-col">
                                        <img src={logoBackgroundWhite}
                                            width="100%" className="small-img" alt="" />
                                    </div>
                                    <div className="small-img-col">
                                        <img src={logoBackgroundWhite}
                                            width="100%" className="small-img" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <div className="product-content">
                                <h2 className="product-title">Nike Shoes</h2>
                                <a href="#" className="product-link">visit nike store</a>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>4.7.(21)</span>
                                </div>
                                <div className="product-price">
                                    <p className="last-price">Docena Price: <span>$525.90</span></p>
                                    <p className="new-price">Unidad Price: <span>$100.90</span></p>
                                </div>
                                <div className="product-detail">
                                    <h2>About this iteme:</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolore fugiat
                                        exercitationem porro facere delectus commodi dicta, assumenda at blanditiis, doloremque
                                        perferendis ex laudantium aspernatur officia et ab omnis illum.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit voluptatem
                                        provident dolorum, exercitationem tempore corrupti mollitia praesentium. .</p>
                                    <ul>
                                        <li>Color : <span>Black</span> </li>
                                        <li>Avaible : <span> in stock</span> </li>
                                        <li> Category : <span> shoes</span> </li>
                                        <li> Shiping area : <span>All over the world</span> </li>
                                        <li> Shipping fee : <span> Free</span> </li>
                                    </ul>
                                </div>
                                <div className="purchase-info">
                                    /*VERIFICAR EL EVENTO ONCHANGE PARA EL CONTADOR */
                                    <input type="number" min="0" defaultValue={numberCant} />
                                    <button type="button" className="btn"> Add to cart <i className="fas fa-shopping-cart"></i></button>
                                    <button type="button" className="btn">Comprar</button>
                                </div>
                                <div className="social-links">
                                    <p>Share At:</p>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container comments">
                <div className="tabs">
                    <div className="tab-header">
                        <div className="active"><i className="fa fa-code"></i> ESPECIFICACIONES</div>
                        <div><i className="fa fa-bar-chart"></i> COMENTARIOS</div>
                        <div><i className="fa fa-envelope"></i> CAMBIOS Y DEVOLUCIONES</div>
                    </div>

                    <div className="tab-indicador"></div>

                    <div className="tab-body">
                        <div className="active">
                            <h1>aqui va la tabla
                                ddfsd
                            </h1>
                        </div>
                        <div>
                            <h2>This is section Comentarios</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati deleniti unde eligendi
                                quibusdam a sed corporis expedita laboriosam, eaque libero doloremque amet minus sapiente? Nihil
                                laboriosam labore aperiam hic?</p>
                        </div>
                        <div>
                            <h2>This is section Devoluciones</h2>
                            <div className="devolucionIcono">
                                AA
                            </div>
                            <div className="textIcono">BB</div>

                        </div>
                    </div>
                </div>

            </div>


            <footer>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, dolorum in ad optio voluptatem iste
                    numquam neque unde sequi veritatis vitae voluptas architecto blanditiis a nobis natus rerum provident
                    pariatur!
                </p>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            ></script>
            <script src="../hooks/Product-details.js"></script>

        </div>
    );
}


export default Details;