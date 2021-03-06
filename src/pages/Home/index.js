import React,{useState, ChangeEvent, useEffect, View} from 'react';
import { WebView } from 'react-native-webview';
import { Drawer, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';
import Logo from '../../assets/logo.png'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#88CE5B',
    accent: '#085aa2',
  },
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    
  },
  tinyLogo: {
    width: 32,
    height: 36,
    alignItems: 'center',
  },
});

const Home = ()=>{
    const [active, setActive] = React.useState(false);

    const jsCode =
"let meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=0'); document.getElementsByTagName('head')[0].appendChild(meta);";
    return (
      <PaperProvider theme={theme}>
         <Appbar title={<img src="https://unsplash.it/40/40"/>}>
          <Appbar.Action
            icon="menu"
            color='green'
            onPress={() => setActive(!active)}
            />
          
          <Appbar.Content
                title={
                  <Image            
                  source={Logo}
                  style={styles.tinyLogo}
                />
                }
                style={{marginLeft: '25%'}}
            />
          </Appbar>
             <WebView
             source={{
              uri: 'https://siga.activesoft.com.br/login/?instituicao=MATERCHRIS'              
            }}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={jsCode}
            setBuiltInZoomControls={false}   
            setz         
            style={{ }}
      />
       <Drawer.Section style={{width: '40%'}} title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
      </PaperProvider>
    );
}
export default Home;
