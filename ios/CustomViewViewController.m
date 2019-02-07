//
//  CustomViewViewController.m
//  AutocompleteDemoApp
//
//  Created by Macbook on 25/01/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CustomViewViewController.h"
#import "React/RCTViewManager.h"

@interface CustomViewViewController(RCTViewManager)

@end

@implementation CustomViewViewController

- (UIView *)view
{
  @try {
    UIViewController *myViewController = [[UIStoryboard storyboardWithName:@"CustomStoryBoard" bundle:nil] instantiateViewControllerWithIdentifier:@"CustomViewViewController"];
    return myViewController;
  }
  @catch (NSException *exception) {
    NSLog(@"Exception: This is not the storyboard");
  }
  @finally {
    NSLog(@"I found it!");
  }
//  RNTMapView *map = [RNTMapView new];
//  map.delegate = self;
 //return;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
