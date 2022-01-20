import React from 'react'
import {
  SafeAreaView,
  Text
} from 'react-native'
import Amplify from 'aws-amplify';
import App from './App';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
//import { Home } from './ui-components';


const App = () => {
  return (
    <AmplifyProvider>
      <SafeAreaView>
        <Text>text</Text>
      </SafeAreaView>
    </AmplifyProvider>
  )
}

export default App
