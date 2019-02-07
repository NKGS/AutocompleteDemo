package com.autocompletedemoapp;

import android.app.Activity;
import android.util.Log;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class CustomViewManager extends SimpleViewManager<NativeView> {
    public static final String REACT_CLASS = "RCTNativeView";
    private ThemedReactContext mContext = null;
    private Activity mActivity = null;

    CustomViewManager(Activity activity){
        Log.i("react","Called native view manager activity");
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }
//
//    @ReactProp(name = "streamUrl")
//    public void setStreamUrl(VideoView view, @Nullable String streamUrl) {
//        Log.i("react","called native UI");
//    }

    @Override
    public NativeView createViewInstance(ThemedReactContext context){
        mContext = context;
        return new NativeView(context);
    }
}
