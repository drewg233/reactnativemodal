# React-Native-Router-Flux / Mapbox Issue

### Clone starter project

- Clone this repo
- Npm install and run the project (I have been using iOS)
- Should see a working modal

### Steps to reproduce issue

- Add mapbox
    - Run `npm install https://github.com/nitaliano/react-native-mapbox-gl/tarball/master --save`
    - `cd ios && pod init`
    - Copy and replace the podfile with script below
    - `pod install`
    - cd back to the project and run the project again.
    - Try the "Show Modal" button.

### Podfile
```sh
target 'testingmodal' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!
  # Flexbox Layout Manager Used By React Native
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga/Yoga.podspec'

  # React Native
  pod 'React', path: '../node_modules/react-native', subspecs: [
    # Comment out any unneeded subspecs to reduce bundle size.
    'Core',
    'DevSupport',
    'RCTActionSheet',
    'RCTAnimation',
    'RCTBlob',
    'RCTCameraRoll',
    'RCTGeolocation',
    'RCTImage',
    'RCTNetwork',
    'RCTPushNotification',
    'RCTSettings',
    'RCTTest',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket',
    'RCTLinkingIOS'
  ]

  # Mapbox
  pod 'react-native-mapbox-gl', :path => '../node_modules/@mapbox/react-native-mapbox-gl'

  post_install do |installer|
    installer.pods_project.targets.each do |target|
      if target.name == "React"
        target.remove_from_project
      end

      if target.name == "yoga"
        target.remove_from_project
      end
    end
  end

end

```