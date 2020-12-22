package com.godeliver.user.Adapter;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.cardview.widget.CardView;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.godeliver.user.Activity.OrderDetail;
import com.godeliver.user.AppController;
import com.godeliver.user.Model.My_order_model;
import com.godeliver.user.R;
import com.godeliver.user.util.CustomVolleyJsonRequest;
import com.godeliver.user.util.Session_management;
import com.godeliver.user.util.TodayOrderClickListner;

import org.json.JSONException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.godeliver.user.Config.BaseURL.dOutforDelivery;

public class My_Today_Order_Adapter extends RecyclerView.Adapter<My_Today_Order_Adapter.MyViewHolder> implements Filterable {

    ProgressDialog progressDialog;
    private List<My_order_model> modelList;
    private LayoutInflater inflater;
    private Context context;
    private Session_management session_management;
    private TodayOrderClickListner todayOrderClickListner;
    private String viewType;
    private List<My_order_model> searchList;

    public My_Today_Order_Adapter(Context context, List<My_order_model> modemodelList,String viewType,TodayOrderClickListner todayOrderClickListner) {

        this.context = context;
        this.modelList = modemodelList;
        this.searchList = modemodelList;
        this.viewType = viewType;
        inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        this.todayOrderClickListner = todayOrderClickListner;

    }


    @Override
    public Filter getFilter() {
        return new Filter() {
            @Override
            protected FilterResults performFiltering(CharSequence charSequence) {
                String charString = charSequence.toString();
                if (charString.isEmpty()) {
                    modelList = searchList;
                } else {
                    List<My_order_model> filteredList = new ArrayList<>();
                    for (My_order_model row : searchList) {
                        if (row.getRecivername().toLowerCase().contains(charString.toLowerCase()) || row.getSale_id().contains(charSequence)) {
                            filteredList.add(row);
                        }
                    }
                    modelList = filteredList;
                }

                FilterResults filterResults = new FilterResults();
                filterResults.values = modelList;
                return filterResults;
            }

            @Override
            protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
                modelList = (ArrayList<My_order_model>) filterResults.values;
                notifyDataSetChanged();
            }
        };
    }

    public void setDataAfterSearch(List<My_order_model> todayOrderModels) {
        modelList = new ArrayList<>();
        searchList = new ArrayList<>();
        modelList.clear();
        searchList.clear();
        modelList.addAll(todayOrderModels);
        searchList.addAll(todayOrderModels);
        notifyDataSetChanged();
    }


    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.row_order_rv, parent, false);
        context = parent.getContext();
        session_management = new Session_management(context);
        return new MyViewHolder(itemView);
    }

    @SuppressLint("ResourceAsColor")
    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        final My_order_model mList = modelList.get(position);
        progressDialog = new ProgressDialog(context);
        progressDialog.setMessage("Loading");

        try {
            holder.tv_orderno.setText(mList.getSale_id());

               /* if (mList.getStatus().equals("0")) {
                    holder.pickorder.setVisibility(View.GONE);
                    holder.relativetextstatus.setEnabled(false);

                    holder.tv_status.setText(context.getResources().getString(R.string.pending));
                    holder.relativetextstatus.setText(context.getResources().getString(R.string.pending));
                } else*/
            if (mList.getStatus().equals("Confirmed")) {
                holder.pickorder.setVisibility(View.GONE);
                holder.relativetextstatus.setEnabled(true);
                holder.tv_status.setText(context.getResources().getString(R.string.confirm));
                holder.relativetextstatus.setText(context.getResources().getString(R.string.outfordeliverd));
                holder.tv_status.setTextColor(context.getResources().getColor(R.color.green));

            } else if (mList.getStatus().equals("Out_For_Delivery")) {
                holder.get_dirc.setVisibility(View.VISIBLE);
                holder.pickorder.setVisibility(View.GONE);
                holder.relativetextstatus.setEnabled(true);
                holder.tv_status.setText(context.getResources().getString(R.string.outfordeliverd));
                holder.relativetextstatus.setText(context.getResources().getString(R.string.delivered));
                holder.tv_status.setTextColor(context.getResources().getColor(R.color.green));

            }

            holder.get_dirc.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    if (mList.getStatus().equalsIgnoreCase("Out_For_Delivery")) {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/search/?api=1&query=" + mList.getUserLat() + "," + mList.getUserLong()));
                        view.getContext().startActivity(intent);
                    } else if (mList.getStatus().equalsIgnoreCase("Confirmed")) {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/search/?api=1&query=" + mList.getLat() + "," + mList.getLng()));
                        view.getContext().startActivity(intent);
                    }


                }
            });

            holder.payment_mode.setText(mList.getPayment_method());
            holder.payment_status.setText(mList.getPayment_status());

//                holder.get_dirc.setOnClickListener(new View.OnClickListener() {
//                    @Override
//                    public void onClick(View view) {
//
//                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/maps/search/?api=1&query=" + mList.getDbLat() + "," + mList.getDbuserLong()));
//                        context.startActivity(intent);
//                    }
//                });

            holder.relativetextstatus.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    if (mList.getStatus().equalsIgnoreCase("Out_For_Delivery")) {
                       todayOrderClickListner.orderDetailsClick(viewType,position);
                    } else if (mList.getStatus().equalsIgnoreCase("Confirmed")) {
                        todayOrderClickListner.orderConfirm(viewType,position);
                    }


                }
            });

//                holder.relativetextstatus.setOnClickListener(new View.OnClickListener() {
//                    @Override
//                    public void onClick(View view) {
//
//
//
//                    }
//                });


        } catch (Exception e) {
            e.printStackTrace();
        }

        holder.tv_date.setText(mList.getOn_date());
        holder.tv_tracking_date.setText(mList.getOn_date());
        //  holder.tv_time.setText(mList.getDelivery_time_from() + "-" + mList.getDelivery_time_to());
        holder.tv_time.setText(mList.getDelivery_time_from());
        holder.tv_price.setText(session_management.getCurrency() + mList.getTotal_amount());
        holder.tv_item.setText(" " + mList.getTotal_items());
        holder.tv_socity.setText(mList.getSocityname());
        holder.tv_house.setText(mList.getHouse());
        holder.tv_storename.setText(mList.getStore_name());
        holder.tv_recivername.setText(modelList.get(position).getRecivername());
        holder.tv_recivernumber.setText(modelList.get(position).getRecivermobile());
        if (modelList.get(position).getRecivermobile() != null &&!modelList.get(position).getRecivermobile().equalsIgnoreCase("null")&&!modelList.get(position).getRecivermobile().equalsIgnoreCase("")){
            holder.call_lay.setVisibility(View.VISIBLE);
        }else {
            holder.call_lay.setVisibility(View.GONE);
        }
        holder.call.setOnClickListener(v -> {
            todayOrderClickListner.callAction(mList.getRecivermobile());
        });

    }

    @Override
    public int getItemCount() {
        return modelList.size();

    }



    public class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView tv_orderno, tv_status, tv_date, tv_time, tv_price, tv_item, relativetextstatus, tv_tracking_date, tv_socity,
                tv_recivername, tv_house, tv_storename,tv_recivernumber,payment_mode,payment_status;

        Button get_dirc, pickorder;
        ImageView call;
        CardView cardView;
        LinearLayout call_lay;

        public MyViewHolder(View view) {
            super(view);

            tv_storename = view.findViewById(R.id.store_name);
            get_dirc = view.findViewById(R.id.get_dirc);
            tv_orderno = view.findViewById(R.id.tv_order_no);
            tv_status = view.findViewById(R.id.tv_order_status);
            relativetextstatus = view.findViewById(R.id.status);
            tv_tracking_date = view.findViewById(R.id.tracking_date);
            tv_date = view.findViewById(R.id.tv_order_date);
            tv_time = view.findViewById(R.id.tv_order_time);
            tv_price = view.findViewById(R.id.tv_order_price);
            tv_item = view.findViewById(R.id.tv_order_item);
            tv_socity = view.findViewById(R.id.tv_societyname);
            tv_house = view.findViewById(R.id.tv_house);
            tv_recivername = view.findViewById(R.id.tv_recivername);
            tv_recivernumber = view.findViewById(R.id.tv_recivernumber);
            payment_mode = view.findViewById(R.id.payment_mode);
            payment_status = view.findViewById(R.id.payment_status);
            call = view.findViewById(R.id.call);
            call_lay = view.findViewById(R.id.call_lay);
            pickorder = view.findViewById(R.id.order_picked);
            cardView = view.findViewById(R.id.card_view);


        }
    }
}
