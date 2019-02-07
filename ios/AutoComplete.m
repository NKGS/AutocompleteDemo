//
//  AutoComplete.m
//  AutocompleteDemoApp
//
//  Created by Macbook on 23/01/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "AutoComplete.h"

@implementation AutoComplete
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"video-progress"];
}

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(callNativeMethod:(NSString*)username callBack:(RCTResponseSenderBlock)callback){
  NSArray * result = [[NSArray alloc] initWithObjects:@"Welcome",username, nil];
  callback(@[result]);
}
@end
