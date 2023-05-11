import React from 'react';
import './AjoutVoiture.css';


class AjoutVoiture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: "",
            model: "",
            annee: 0,
            couleur: ""
        }

        this.handleRecherche = this.handleRecherche.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRecherche = (e) => {
        e.preventDefault();

        // la marque 
        const marque = document.getElementById('marque').value
         // Le model
         const model = document.getElementById('model').value
          // L'annee 
        const annee = document.getElementById('annee').value
         // La couleur 
         const couleur = document.getElementById('couleur').value
         

         this.props.AjouteVoiture(marque, model, annee, couleur);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <form onSubmit={this.handleRecherche} id="form-recherche">
                Marque : 
                <input type="text" name="marque" id="marque" value={this.state.marque} onChange={this.handleChange}/>

                Model : 
                <input type="text" name="model" id="model" value={this.state.model} onChange={this.handleChange}/>

                Année : 
                <input type="number" name="annee" id="annee" value={this.state.annee} onChange={this.handleChange}/>

                Couleur : 
                <input type="text" name="couleur" id="couleur" value={this.state.couleur} onChange={this.handleChange}/>

                <input type="submit" value="Ajouter" />
            </form>
            
        );
    }
}

export default AjoutVoiture;