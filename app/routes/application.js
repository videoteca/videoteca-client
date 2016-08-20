import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'video',
        attributes: {
          picture: 'http://esporte.band.uol.com.br/rio-2016/fotos-modalidades/SY.jpg',
          title: 'Nado Sincronizado',
          description: 'Equipes, rotina livre',
          location: 'CTR AQUÁTICO MARIA LENK',
          recordedIn: '10/07/2016',
          provider: 'youtube'
        },
        relationships: {}
      },
      {
        id: 2,
        type: 'video',
        attributes: {
          picture: 'http://esporte.band.uol.com.br/rio-2016/fotos-modalidades/SY.jpg',
          title: 'Nado Sincronizado',
          description: 'Equipes, rotina livre',
          location: 'CTR AQUÁTICO MARIA LENK',
          recordedIn: '10/07/2016',
          provider: 'youtube'
        },
        relationships: {}
      },
      {
        id: 3,
        type: 'video',
        attributes: {
          picture: 'http://esporte.band.uol.com.br/rio-2016/fotos-modalidades/SY.jpg',
          title: 'Nado Sincronizado',
          description: 'Equipes, rotina livre',
          location: 'CTR AQUÁTICO MARIA LENK',
          recordedIn: '10/07/2016',
          provider: 'youtube'
        },
        relationships: {}
      }]
    });

    return [];
  }
});


