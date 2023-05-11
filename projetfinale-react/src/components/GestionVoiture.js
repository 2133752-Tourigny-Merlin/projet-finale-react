import React from 'react';
import Api from '../utils/Api';
import CarteVoiture from './CarteVoiture';
import AjoutVoiture from './AjoutVoiture';
import ChangerApi from './ChangerApi';
import './GestionVoiture.css';

import axios from "axios";

class GestionVoiture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      listeVoitures: [],
      api: [],
      q: ""
    };

    this.RecupererVoiture = this.RecupererVoiture.bind(this);
    this.AjouterVoiture = this.AjouterVoiture.bind(this);
    this.DeleteVoiture = this.DeleteVoiture.bind(this);
    this.ChangerCouleurVoiture = this.ChangerCouleurVoiture.bind(this);
    this.ChangerApi = this.ChangerApi.bind(this);
    this.RandomQ = this.RandomQ.bind(this);
  }

  componentDidMount() {
    this.RecupererVoiture();
    this.RandomQ();
  }

  RecupererVoiture = () => {
    Api({
      method: 'GET',
      url: '/voiture',
    }).then((reponse) => {
      console.log(reponse);
      const listeVoitures = reponse.data.Voiture;
      this.setState({
        listeVoitures: listeVoitures,
        isLoaded: true,
      });
    });
  };

  AjouterVoiture = (marque, model, annee, couleur) => {
    Api({
      method: 'POST',
      url: `/voiture/${marque}/${model}/${annee}/${couleur}`,
    }).then((reponse) => {
      console.log(reponse.data);
      window.location.reload();
    });
  };

  DeleteVoiture = (voitureId) => {
    Api({
      method: 'DELETE',
      url: `/voiture/${voitureId}`,
    }).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  ChangerCouleurVoiture = (voitureId, couleur) => {
    Api({
      method: 'PUT',
      url: `/voiture/${voitureId}/${couleur}`,
    }).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };


  ChangerApi = (nom, mdp, affiche) => {
    Api({
      method: 'PUT',
      url: `/user/${nom}/${mdp}/${affiche}`,
    }).then((response) => {
      console.log(response.data.modifApi);
      this.setState({
        api: response.data.modifApi
      });

      //window.location.reload();
    });
  };

  RandomQ = () => {
    Api({
      method: 'GET',
      url: 'https://api.quotable.io/random',
    }).then((reponse) => {
      console.log(reponse);
      const Q = reponse.data.content;
      this.setState({
        q: Q,
        isLoaded: true,
      });
    });
  };

  render() {
    if (!this.state.isLoaded) {
      return <h1>Chargement en cours...</h1>;
    }

    const listeCarteVoitures = this.state.listeVoitures.map((voiture) => {
      return (
        <CarteVoiture
          voiture={voiture}
          key={voiture.id}
          supprimerVoiture={this.DeleteVoiture}
          changerCouleurVoiture={this.ChangerCouleurVoiture}
        />
      );
    });

    return (
      <section className='gestion-voiture'>
        <div className='left'>
          <h5>
            {this.state.q}
          </h5>
          <div className='form'>
            <div className='div-api'>
                <h1 className='titre-api'>Modifier Api</h1>
                <ChangerApi ChangerApi={this.ChangerApi}/>
                <h6>
                  {this.state.api}
                </h6>
            </div>
            <div className='div-ajout'>
                <h1 className='titre-ajout'>Ajouter une voiture</h1>
                <AjoutVoiture AjouteVoiture={this.AjouterVoiture} />
            </div>
          </div>
        </div>

        <div className='entete-recherche'>
          <h1 className='titre-page'>Gestion des voitures</h1>
          <div className='liste-voiture'>{listeCarteVoitures}</div>
        </div>
      </section>
    );
  }
}

export default GestionVoiture;