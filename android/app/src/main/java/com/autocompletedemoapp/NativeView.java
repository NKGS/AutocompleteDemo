package com.autocompletedemoapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.Log;
import android.view.View;

public class NativeView extends View {


    public NativeView(Context context) {
        super(context);
        //onDraw(this.);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        Log.i("react","called on draw");
        Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);
        paint.setColor(Color.MAGENTA);
        Rect rect = new Rect();
        rect.left = 0+30;
        rect.right = getWidth()-100;
        rect.top = 0+30;
        rect.bottom = getHeight()-100;

        canvas.drawRect(rect, paint);
    }

}
