package com.jv;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

import java.util.Scanner;

public class MainActivity extends AppCompatActivity {

    Button scan_button,idButton;
    LinearLayout rootView;
    EditText packageId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        packageId = findViewById(R.id.packageId);

        idButton = findViewById(R.id.idButton);
        idButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "https://frosty-shannon-52fc8e.netlify.com?id=" + packageId.getText().toString() ;
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setPackage("com.android.chrome");
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

        rootView = (LinearLayout)findViewById(R.id.rootView);

        final IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.setOrientationLocked(true);
        integrator.setBeepEnabled(false);

        scan_button = (Button)findViewById(R.id.scan_button);
        scan_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                integrator.initiateScan(); // `this` is the current Activity
            }
        });




    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if(result != null) {
            if(result.getContents() == null) {
//                no content
            } else {
                //Toast.makeText(this, "Scanned: " + result.getContents(), Toast.LENGTH_LONG).show();
//                Intent passIntent = new Intent(Main.this,MainActivity.class);

                String package_id = result.getContents();
                Log.d("data",package_id);



                String url = "https://frosty-shannon-52fc8e.netlify.com?id=" + package_id ;
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setPackage("com.android.chrome");
                i.setData(Uri.parse(url));
                startActivity(i);

//                passIntent.putExtra("userId",scanParts[0]);
//
//                startActivity(passIntent);
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}