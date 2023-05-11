import React from 'react';
import './ChangerApi.css';


class ModifierApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            mdp: "",
            affiche: 0
        }

        this.handleRecherche = this.handleRecherche.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRecherche = (e) => {
        e.preventDefault();
        var show = 0;
        // le nom 
        const nom = document.getElementById('nom').value
         // Mot de passe
         const mdp = document.getElementById('mdp').value
         // La couleur 
         const affiche = document.getElementById('affiche').checked
         
         if(affiche){
            show = 1;
         } else {
            show = 0;
         }

        this.props.ChangerApi(nom, mdp, show);
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
                Nom : 
                <input type="text" name="nom" id="nom" value={this.state.nom} onChange={this.handleChange}/>

                Mot de passe : 
                <input type="text" name="mdp" id="mdp" value={this.state.mdp} onChange={this.handleChange}/>

                Afficher clé : 
                <input type="checkbox" name="affiche" id="affiche" value={this.state.affiche} onChange={this.handleChange}/>

                <input type="submit" value="regénéré ma clé" />
            </form>            
        );
    }
}

export default ModifierApi;