import DeviceStats from "../../components/Stats/DeviceStats";
import DeviceNotUsed from "../../components/Stats/DeviceNotUsed";
import DeviceUsed from "../../components/Stats/DeviceUsed";
import DeviceDamagedStats from "../../components/Stats/DeviceDamagedStats";
import LostDevices from "../../components/Stats/LostDevices";
import ExpiringDevices from "../../components/Stats/ExpiringDevices";
import PendingApprovalDevices from "../../components/Stats/PendingApprovalDevices";
import PendingReturnDevices from "../../components/Stats/PendingReturnDevices";
import RejectedDevices from "../../components/Stats/RejectedDevices";

export default function DeviceStatistics() {
    return (
        <div className="p-6">
            <DeviceStats />
            <DeviceNotUsed />
            <DeviceUsed />
            <DeviceDamagedStats />
            <LostDevices />
            <ExpiringDevices />
            <PendingApprovalDevices />
            <PendingReturnDevices />
            <RejectedDevices />
            {/* Các component còn lại */}
        </div>
    );
}
