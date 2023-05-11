import React from 'react';
import './CarteVoiture.css';

class CarteVoiture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true, // La carte est chargée
      voiture: props.voiture
    }
  }

  supprimerVoiture = () => {
    const voitureId = this.state.voiture.id;
    this.setState({isLoaded: false});

    this.props.supprimerVoiture(voitureId);
  }

  changerCouleurVoiture = () => {
    const voitureId = this.state.voiture.id;
    const newColor = prompt('Entrez la couleur de la voiture:', '');
    if (newColor) {
      this.setState({ isLoaded: false });
      this.props.changerCouleurVoiture(voitureId, newColor);
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { voiture } = this.state;

    if(!this.state.isLoaded) {
      return (<div>Chargement en cours...</div>);
    }

    return (
      <div className='carte-voiture'>
        <div className='carte-voiture-header'>
          <h2>{voiture.marque} {voiture.model}</h2>
        </div>

        <div className='carte-voiture-body'>
          <p>Année : {voiture.annee}</p>
          <p>Couleur : {voiture.couleur}</p>
        </div>

        <div className='carte-voiture-footer'>
          <button onClick={this.supprimerVoiture}>Supprimer</button>
          <button onClick={() => this.changerCouleurVoiture()}>Changer la couleur</button>
        </div>
      </div>
    );
  }
}

export default CarteVoiture;


