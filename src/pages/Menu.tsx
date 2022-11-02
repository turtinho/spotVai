import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonAvatar,IonList,
  IonButton, IonItem,IonLabel,IonImg } from '@ionic/react';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle className='ion-padding'>
            Bem vindo, Igor
        </IonTitle>
        <IonContent className='ion-padding'>
          O que deseja ouvir hoje?
        </IonContent>
      </IonContent>
      <IonCard>
        <IonItem routerLink='/tab1'>
          <IonAvatar slot='start'>
            <IonImg src="https://pbs.twimg.com/profile_images/822810026150608897/dIJJVTJt_400x400.jpg"/> 
          </IonAvatar>
          <IonLabel>Tribo da Periferia</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c"/>
          </IonAvatar>
          <IonLabel>Guns N' Roses</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="http://s.glbimg.com/jo/g1/f/original/2011/07/27/nevermind.jpg"/>
          </IonAvatar>
          <IonLabel>Nirvanna</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="https://images-americanas.b2w.io/produtos/2615687312/imagens/cd-dvd-jads-jadson-balada-bruta/2615687312_1_xlarge.jpg"/>
          </IonAvatar>
          <IonLabel>Jads e Jadson</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="https://i.scdn.co/image/ab6761610000e5eb6a0ec2243b2929c14a1dea8e"/>
          </IonAvatar>
          <IonLabel>Bruno e Marrone</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/3/0/4/330491c4b4ea2a2588bb7f63286e7bcb.jpg"/>
          </IonAvatar>
          <IonLabel>Tião Carreiro</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot='start'>
            <IonImg src="https://portalsertanejo.net/wp-content/uploads/2018/09/39616362_1640895176020758_8836286773567946752_n.jpg"/>
          </IonAvatar>
          <IonLabel>Lucas Reis e Thacio</IonLabel>
        </IonItem>
      </IonCard>
      <IonButton routerLink='/Login'>
          Logout
      </IonButton>
    </IonPage>
  );
};

export default Menu;
