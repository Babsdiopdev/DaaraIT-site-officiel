import React, {Component} from "react";
import image_président from "../../images/IMG_8278.jpg";
import "./motdupresi.css";


class MotDupresident extends Component {


    render(){
        return  <section>
                    <div className="motdupresident">
                            <h3 className="titrePr"> Le mot du président</h3>
                            <img src={image_président} alt="photo_président" className="photoPresident" />
                                    
                            <section className="textdupresident">
                            <h4 className="name">NDONGALI NDOYE |<span className="role" style={{fontSize : "x-small", fontWeight : "normal"}}> Présidente Daara IT</span> </h4>
                            <br />

                            Chers membres de notre communauté,

                            Je suis ravi de m'adresser à vous aujourd'hui en tant que président de notre organisation. C'est avec une grande fierté que je prends la parole pour partager avec vous mes pensées et mes espoirs pour notre communauté.

                            Tout d'abord, je tiens à remercier chacun d'entre vous pour votre engagement envers notre communauté. Votre dévouement et votre soutien ont permis à notre organisation de croître et de prospérer au fil des années. Nous avons accompli beaucoup de choses ensemble, et nous avons encore beaucoup à réaliser.

                            En tant que président, je suis déterminé à continuer à travailler avec vous tous pour faire de notre communauté un endroit encore meilleur pour vivre et travailler. Nous avons la chance de compter sur une communauté diversifiée et talentueuse, et je suis convaincu que nous pouvons accomplir de grandes choses ensemble.

                            Je suis également conscient des défis auxquels notre communauté est confrontée. Nous sommes confrontés à des enjeux importants tels que la protection de l'environnement, la justice sociale et l'éducation. Cependant, je suis convaincu que nous pouvons surmonter ces défis en travaillant ensemble et en nous engageant à faire une différence positive dans nos vies et dans celles des autres.

                            Je suis fier de diriger cette communauté, et je suis convaincu que nous avons le potentiel de faire de grandes choses ensemble. Je vous remercie encore pour votre soutien et votre engagement, et je suis impatient de continuer à travailler avec vous tous pour réaliser notre vision pour notre communauté.

                            Cordialement,

                            Le président de notre communauté.

                            <br/>
                            <span className="slogan" > " L'informatique plus qu'une passion, un mode de vie"</span>

                            </section>


                            
                </div>
        </section>
    }
}

export default MotDupresident