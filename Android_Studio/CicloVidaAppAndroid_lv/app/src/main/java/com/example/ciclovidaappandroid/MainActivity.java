package com.example.ciclovidaappandroid;

import android.os.Bundle;
import android.util.Log;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    protected final String LIFECYCLE_TAG="Lifecycle";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(LIFECYCLE_TAG,"onCreate()");
        EdgeToEdge.enable(this);
        setContentView(R.layout.otro_layout);

    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(LIFECYCLE_TAG,"onStart()");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d(LIFECYCLE_TAG,"onResume()");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(LIFECYCLE_TAG,"onPause()");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(LIFECYCLE_TAG,"onStop()");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(LIFECYCLE_TAG,"onDestroy()");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(LIFECYCLE_TAG,"onRestart()");
    }
}