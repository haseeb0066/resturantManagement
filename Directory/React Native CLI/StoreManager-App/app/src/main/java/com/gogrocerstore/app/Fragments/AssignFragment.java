package com.gogrocerstore.app.Fragments;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.gogrocerstore.app.Adapter.My_Nextday_Order_Adapter;
import com.gogrocerstore.app.Adapter.My_Today_Order_Adapter;
import com.gogrocerstore.app.Model.ListAssignAndUnassigned;
import com.gogrocerstore.app.R;
import com.gogrocerstore.app.util.TodayOrderClickListner;

import java.util.List;

public class AssignFragment extends RecyclerView.Adapter {

    private Context context;
    private List<ListAssignAndUnassigned> listAssignAndUnassigneds;
    private TodayOrderClickListner todayOrderClickListner;
    private My_Today_Order_Adapter my_today_order_adapter;
    private My_Nextday_Order_Adapter my_nextday_order_adapter;

    public AssignFragment(Context context, List<ListAssignAndUnassigned> listAssignAndUnassigneds, TodayOrderClickListner todayOrderClickListner) {
        this.context = context;
        this.listAssignAndUnassigneds = listAssignAndUnassigneds;
        this.todayOrderClickListner = todayOrderClickListner;
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view;
        if (viewType == 0) {
            view = LayoutInflater.from(parent.getContext()).inflate(R.layout.assign_view, parent, false);
            return new MyAssignView(view);
        } else {
            view = LayoutInflater.from(parent.getContext()).inflate(R.layout.unassign_view, parent, false);
            return new MyUnAssignView(view);
        }

    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        ListAssignAndUnassigned assignAndUnassigned = listAssignAndUnassigneds.get(position);
        switch (assignAndUnassigned.getViewType()) {
            case "assigned":
                MyAssignView myAssignView = (MyAssignView) holder;
                myAssignView.assign_recy.setLayoutManager(new LinearLayoutManager(context, RecyclerView.VERTICAL, false));
                myAssignView.assign_recy.setItemAnimator(new DefaultItemAnimator());
                my_today_order_adapter = new My_Today_Order_Adapter(assignAndUnassigned.getTodayOrderModels(), todayOrderClickListner);
                myAssignView.assign_recy.setAdapter(my_today_order_adapter);
                break;
            case "unassigned":
                MyUnAssignView myUnAssignView = (MyUnAssignView) holder;
                myUnAssignView.unAssign_recy.setLayoutManager(new LinearLayoutManager(context, RecyclerView.VERTICAL, false));
                myUnAssignView.unAssign_recy.setItemAnimator(new DefaultItemAnimator());
                my_nextday_order_adapter = new My_Nextday_Order_Adapter(assignAndUnassigned.getNextDayOrders(), todayOrderClickListner);
                myUnAssignView.unAssign_recy.setAdapter(my_nextday_order_adapter);
                break;
        }

    }

    @Override
    public int getItemViewType(int position) {
        switch (listAssignAndUnassigneds.get(position).getViewType()) {
            case "assigned":
                return 0;
            case "unassigned":
                return 1;
        }
        return super.getItemViewType(position);
    }

    @Override
    public int getItemCount() {
        return listAssignAndUnassigneds.size();
    }

    public void filterOrder(String query, ListAssignAndUnassigned viewType) {
        if (viewType.getViewType().equalsIgnoreCase("assigned")) {
            if (my_today_order_adapter != null) {
                if (query != null && query.length() > 0) {
                    my_today_order_adapter.getFilter().filter(query);
                } else {
                    my_today_order_adapter.setDataAfterSearch(viewType.getTodayOrderModels());
                }

            }
        } else if (viewType.getViewType().equalsIgnoreCase("unassigned")) {
            if (my_nextday_order_adapter != null) {
                if (query != null && query.length() > 0) {
                    my_nextday_order_adapter.getFilter().filter(query);
                } else {
                    my_nextday_order_adapter.setDataAfterSearch(viewType.getNextDayOrders());
//                    my_nextday_order_adapter.notifyDataSetChanged();
                }
            }
        }
    }

    public class MyAssignView extends RecyclerView.ViewHolder {
        private RecyclerView assign_recy;

        public MyAssignView(@NonNull View itemView) {
            super(itemView);
            assign_recy = itemView.findViewById(R.id.assign_recy);
        }
    }

    public class MyUnAssignView extends RecyclerView.ViewHolder {
        private RecyclerView unAssign_recy;

        public MyUnAssignView(@NonNull View itemView) {
            super(itemView);
            unAssign_recy = itemView.findViewById(R.id.unassign_recy);
        }
    }
}
