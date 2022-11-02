import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonImg,
  IonBackButton, IonButtons, IonModal, IonText, IonIcon, IonItem, IonLabel } from '@ionic/react';

import {
  home,
  informationCircle,
  person,
  search,
  map,
  play,
  pause,
} from 'ionicons/icons';

const Reproduzindo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
            <IonImg src='https://images.suamusica.com.br/5PQsy1jBPKvo0VzjhoKfKriaZWI=/300x300/13121534/2672838/cd_cover.jpg'/>
      </IonCard>
      <IonTitle >Pianista da Rua 6</IonTitle>
      <IonContent className='ion-padding'>Tribo da Periferia Ao Vivo</IonContent>
      </IonContent>
      <IonItem>
       <IonIcon icon={pause} size='large' align-self='center'/>
       <IonLabel>
         Tribo da Periferia - Pianista da Rua 6
       </IonLabel>
      </IonItem>
    </IonPage>
  );
};

export default Reproduzindo;

