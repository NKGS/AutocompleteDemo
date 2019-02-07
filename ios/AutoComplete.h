//
//  AutoComplete.h
//  AutocompleteDemoApp
//
//  Created by Macbook on 23/01/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTBridge.h>


@interface AutoComplete : RCTEventEmitter<RCTBridgeModule>
@property (nonatomic, strong) NSString *verifyCode;
@end
