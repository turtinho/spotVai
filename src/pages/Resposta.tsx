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
  
  const Resposta: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Reproduzindo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
              <IonImg src='https://i.ytimg.com/vi/9dqGuzslv6E/maxresdefault.jpg'/>
        </IonCard>
        <IonTitle >Photoshop</IonTitle>
        <IonContent className='ion-padding'>Tribo da Periferia Ao Vivo</IonContent>
        </IonContent>
        <IonItem>
         <IonIcon icon={pause} size='large'/>
         <IonLabel>
           Tribo da Periferia - Photoshop
         </IonLabel>
        </IonItem>
      </IonPage>
    );
  };
  
  export default Resposta;
  
  